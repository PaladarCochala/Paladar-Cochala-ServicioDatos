'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const nombresRutas = require('./resources/routes');
const cors = require('cors');
const restaurantes = require('./routes/restaurantes');
const ROUTE_URL = '/api';

class Application {
    constructor() {
        this.express = express();
        this.setUpCors();
        this.setUpExpress();
        this.setUpRoutes();
        this.setUpNotFoundRoute();
        this.setUpPort();
    }

    setUpRoutes() {
        this.express.use(ROUTE_URL + nombresRutas.restaurantes.url, restaurantes);
    }

    setUpExpress() {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    setUpPort() {
        this.express.set('port', process.env.PORT || 5000);
    }

    setUpNotFoundRoute() {
        this.express.use((request, response, next) => {
            const error = new Error("Resource not found");
            error.status = 404;
            next(error);
        });
    }

    setUpCors() {
        this.express.use(cors());
    }

}

module.exports = new Application().express;