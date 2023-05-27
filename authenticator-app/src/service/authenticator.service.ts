import { Response } from "express";
import { Role } from "../model/role.enum";
import { User } from "../model/user.model";
const jwt = require('jsonwebtoken');
import * as fs from "fs";
import { LoginResponseDto } from "../dto/login-response.dto";

export const RSA_PRIVATE_KEY = fs.readFileSync('./keys/key.pem');

export class AuthenticatorService {

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

            const loginResponse: LoginResponseDto = {
                accepted: false,
                token: '',
                expiresIn: 0,
            }

            // send status 401 Unauthorized
            // 
            res.status(401).send(loginResponse);

        }
    }

    onAuthenticationSuccess(res: Response, email: string) {
        const userId = this.findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 5,
            subject: userId
        });

        const loginResponse: LoginResponseDto = {
            accepted: true,
            token: jwtBearerToken,
            expiresIn: 5,
        }

        res.send(loginResponse);
    }

    findUserIdForEmail(email: string): string {
        // throw new Error("Function not implemented.");
        return this.users.find(u => u.email == email)?.email;
    }
}
