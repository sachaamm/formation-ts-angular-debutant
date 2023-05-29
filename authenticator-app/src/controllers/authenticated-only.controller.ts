import { UserDto } from "../dto/user.dto";
import { User } from "../model/user.model";
import { AuthenticatorService } from "../service/authenticator.service";

module.exports = function (app) {

    app.get(
        "/authenticated/random-message",
        function (req, res) {
            console.log('req ', req.auth);
            if (!req.auth) {
                return res.status(401).send({
                    message: 'Interdit'
                });
            }
            res.status(200).send({
                message: randomMessage(999)
            });
        }
    );

    app.get('/authenticated/user-list', (req, res) => {
        const authenticationService = new AuthenticatorService();
        const users: UserDto[] = authenticationService.users.map(u => {
            const user: UserDto = {
                id: u.id,
                email: u.email,
                role: u.role
            };
            return user;
        })
        res.send(users)
    })


    function randomMessage(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }


}