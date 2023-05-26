// Nodes Modules
import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
const app: express.Application = express();

// Constantes de l'application
const APPLICATION_PORT = 4205;


app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use(function (err, req, res, next) {

    console.log(err);
    if (err.name === 'UnauthorizedError') {
        console.log('errr');
    }

    if (err && err.name && err.name.length > 0) {
        res.status(401).send({
            tokenError: err.name
        });
    } else {
        next(err);
    }
});

require('./controllers/authentication.controller')(app);

app.listen(APPLICATION_PORT, () => {
    console.log('listening on port ' + APPLICATION_PORT);
});