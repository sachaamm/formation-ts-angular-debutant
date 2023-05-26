import { Response } from "express";
import { Role } from "../model/role.enum";
import { User } from "../model/user.model";
const jwt = require('jsonwebtoken');
import * as fs from "fs";
import { LoginResponse } from "../model/login-response.model";

export class AuthenticatorService {

    RSA_PRIVATE_KEY = fs.readFileSync('./keys/key.pem');

    users: User[] = [
        { id: 1, email: 'myMail1@mail.com', password: 'myPassword1', role: Role.DefaultRole },
        { id: 2, email: 'myMail2@mail.com', password: 'myPassword2', role: Role.AdminRole }
    ];

    validateEmailAndPassword(email: string, password: string): boolean {
        // Si jamais on trouve un utilisateur qui correspond
        return this.users.filter(u => u.email == email && u.password == password).length > 0;
    }

    authenticationAttempt(res: Response, email: string, password: string) {
        const authenticationSuccess = this.validateEmailAndPassword(email, password);

        if (authenticationSuccess) {
            // send the JWT back to the user
            this.onAuthenticationSuccess(res, email);
        } else {

            const loginResponse: LoginResponse = {
                accepted: false,
                token: '',
                expirationDate: new Date(),
            }

            // send status 401 Unauthorized
            // 
            res.status(401).send(loginResponse);

        }
    }

    onAuthenticationSuccess(res: Response, email: string) {
        const userId = this.findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, this.RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: userId
        });

        console.log('Valid mail and password ');
        console.log(jwtBearerToken)

        const loginResponse: LoginResponse = {
            accepted: true,
            token: jwtBearerToken,
            expirationDate: new Date(),
        }

        res.send(loginResponse);
    }



    findUserIdForEmail(email: string): string {
        // throw new Error("Function not implemented.");
        return "hello";
    }
}
