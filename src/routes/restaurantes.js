'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const restauranteService = require('../app/services/RestauranteService'); 

// api/restaurantes/
router.get(
    Rutas.empty,
    async (request, response) => {
        try {
            const restaurantes = await restauranteService.obtenerRestaurantes(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(restaurantes));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

router.post(
    Rutas.empty,
    async (request, response) => {
        try {
            const nuevoRestaurante = await restauranteService.crearRestaurante(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(nuevoRestaurante));
        } catch (error) {
            response.status(404).send('Error en el proceso de creacion Restaurante');
        }
    }
);
   
// api/restaurantes/:id
router.get(
    Rutas.id,
    async (request, response) => {
        try {
            const restauranteBuscado = await restauranteService.obtenerUnRestaurante(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(restauranteBuscado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

module.exports = router;