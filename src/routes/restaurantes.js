'use strict';
const express = require('express');
const router = express.Router();
const Rutas = require('../resources/routes');
const restauranteService = require('../app/services/RestauranteService');

router.get(
    Rutas.empty,
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

router.get(
    Rutas.id,
    async (request, response) => {
        try {
            const restaurante = await restauranteService.getRestaurante(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(restaurante));
        } catch (error) {
            response.status(404).send(error);
        }
    }
)

router.post(
    Rutas.empty,
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

router.delete(
    Rutas.id,
    async (request, response) => {
        try {
          const result = await restauranteService.deleteRestaurante(request, response);
          response.set('Content-type', 'application/json');
          response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    }
);

router.put(
    Rutas.id,
    async (request, response) => {
        try {
           const result = await restauranteService.actualizarRestaurante(request, response);
           response.set('Content-type', 'application/json');
           response.status(200).send(result); 
        } catch (error) {
            console.log(error);
        }
    }
)
module.exports = router;