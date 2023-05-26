// Nodes Modules
import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const app: express.Application = express();
var { expressjwt: jwt } = require("express-jwt");
import * as fs from "fs";

var publicKey = fs.readFileSync("./keys/publickey.pub");

// Constantes de l'application
const APPLICATION_PORT = 4205;


app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use("/test", jwt(
    {
        secret: publicKey,
        algorithms: ["RS256"],
    }));

app.use((err, req, res, next) => { if (err.name === 'UnauthorizedError') { res.status(401).json({ "error": err.name + ": " + err.message }) } })
require('./controllers/authentication.controller')(app);

app.listen(APPLICATION_PORT, () => {
    console.log('listening on port ' + APPLICATION_PORT);
});