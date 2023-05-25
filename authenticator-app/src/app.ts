import { Request, Response } from "express";
import express from 'express';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
import * as fs from "fs";
import { User } from "./model/user.model";
import { Role } from "./model/role.enum";

const app: express.Application = express();

app.use(bodyParser.json());

app.route('/api/login')
    .post(loginRoute);

const RSA_PRIVATE_KEY = fs.readFileSync('./keys/private.key');

export function loginRoute(req: Request, res: Response) {

    const email = req.body.email;
    const password = req.body.password;

    if (validateEmailAndPassword()) {
        const userId = findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: userId
        });

        // send the JWT back to the user
        // TODO - multiple options available                              
    } else {
        // send status 401 Unauthorized
        res.sendStatus(401);
    }
}

function validateEmailAndPassword(): boolean {
    return true;
}

const users: User[] = [
    { id: 1, email: 'myMail1@mail.com', password: 'myPassword1', role: Role.DefaultRole },
    { id: 2, email: 'myMail2@mail.com', password: 'myPassword2', role: Role.AdminRole }
];

function findUserIdForEmail(email: string): number {
    throw new Error("Function not implemented.");
}
