'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const nombresRutas = require('./resources/routes');
const restauranteRoute = require('./routes/restaurantes');
const comentarios = require('./routes/comentarios');
const usuarioRoute = require('./routes/comentarios');
const swaggerDocumento = require('./config/swagger.json'); 
const ROUTE_URL = '/api';

class Application {
    constructor() {
        this.express = express();
        this.setUpCors();
        this.setUpExpress();
        this.setUpRoutes();
        this.setUpSwagger();
        this.setUpNotFoundRoute();
        this.setUpPort();
    }

    setUpRoutes() {
        this.express.use(ROUTE_URL + nombresRutas.restaurantes.url, restauranteRoute);
        this.express.use(ROUTE_URL + nombresRutas.usuarios.url, usuarioRoute);
        this.express.use(ROUTE_URL + nombresRutas.comentarios.url, comentarios);
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

    setUpSwagger() {
        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumento));
    }

    setUpCors() {
        this.express.use(cors());
    }

}

module.exports = new Application().express;