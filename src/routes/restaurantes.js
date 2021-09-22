'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/routes');
const restauranteService = require('../app/services/RestauranteService');

router.get(
    nombresRutas.empty,
    async (request, response) => {
        try {
            const restaurantes = await restauranteService.getRestaurantes(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(restaurantes));
        }
        catch (error) {
            response.status(404).send(error);
        }
    }
);

router.post(
    nombresRutas.empty,
    async (request, response) => {
        try {
            const newRestaurante = await restauranteService.createRestaurante(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(newRestaurante));
        } catch (error) {
            response.status(404).send('Error while creating Restaurante');
        }
    }
);

module.exports = router;