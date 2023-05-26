import { Request, Response } from "express";
import express from 'express';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
import * as fs from "fs";
import { User } from "./model/user.model";
import { Role } from "./model/role.enum";

const cors = require('cors');

const app: express.Application = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


// app.route('/login')
//     .post(loginRoute);

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send({
        message: 'Hello'
    });
});

app.post('/login', (req, res) => {

    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.set('Access-Control-Allow-Credentials', 'True');

    console.log('login Route');

    const email = req.body.email;
    const password = req.body.password;

    if (validateEmailAndPassword()) {
        const userId = findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: userId
        });

        console.log('Valid mail and password ');
        console.log(jwtBearerToken)

        res.send(jwtBearerToken);
        // send the JWT back to the user
        // TODO - multiple options available                              
    } else {
        // send status 401 Unauthorized
        res.sendStatus(401);
    }
});

const port = 4205;

app.listen(port, () => {
    console.log('listening on port ' + port);
});

const RSA_PRIVATE_KEY = fs.readFileSync('./keys/key.pem');

export function loginRoute(req: Request, res: Response) {

}

function validateEmailAndPassword(): boolean {
    return true;
}

const users: User[] = [
    { id: 1, email: 'myMail1@mail.com', password: 'myPassword1', role: Role.DefaultRole },
    { id: 2, email: 'myMail2@mail.com', password: 'myPassword2', role: Role.AdminRole }
];

function findUserIdForEmail(email: string): string {
    // throw new Error("Function not implemented.");
    return "hello";
}
