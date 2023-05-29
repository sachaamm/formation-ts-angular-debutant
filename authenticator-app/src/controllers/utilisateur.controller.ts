import { AuthenticatorService } from "../service/authenticator.service";

module.exports = function (app) {

    app.get('/user-list', (req, res) => {
        const authenticationService = new AuthenticatorService();
        res.send(authenticationService.users)
    })

}