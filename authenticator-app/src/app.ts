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

require('./controllers/authentication.controller')(app);

app.listen(APPLICATION_PORT, () => {
    console.log('listening on port ' + APPLICATION_PORT);
});