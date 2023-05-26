import { AuthenticatorService } from "../service/authenticator.service";
import * as fs from "fs";

var { expressjwt: jwt } = require("express-jwt");

var publicKey = fs.readFileSync("./keys/publickey.pub");

const URL_APP_ANGULAR = "http://localhost:4200";

// const checkIfAuthenticated = expressJwt({
//     secret: RSA_PUBLIC_KEY
// });

module.exports = function (app) {

    app.post('/login', (req, res) => {
        res.set('Access-Control-Allow-Origin', URL_APP_ANGULAR);
        res.set('Access-Control-Allow-Credentials', 'True');

        const email = req.body.email;
        const password = req.body.password;

        const authenticationService = new AuthenticatorService();

        authenticationService.authenticationAttempt(res, email, password);
    });

    app.get(
        "/test",
        jwt({ secret: publicKey, algorithms: ["RS256"] }),
        function (req, res, err) {
            console.log('err ', err);
            if (!req.auth) {
                return res.sendStatus(401);
            }
            res.status(200).send({
                message: 'salut'
            });
        },
        (err) => {
            console.log(err)
            console.log('ERR')

        }
    );

}