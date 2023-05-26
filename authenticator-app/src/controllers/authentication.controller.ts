import { AuthenticatorService } from "../service/authenticator.service";

const URL_APP_ANGULAR = "http://localhost:4200";

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
        function (req, res) {
            console.log('req ', req.auth);
            if (!req.auth) {
                return res.status(401).send({
                    message: 'Interdit'
                });
            }
            res.status(200).send({
                message: 'salut'
            });
        }
    );


}