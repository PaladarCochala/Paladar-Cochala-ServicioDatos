'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const restauranteService = require('../app/services/RestauranteService'); 

// api/restaurantes/
router.get(Rutas.empty, restauranteService.obtenerRestaurantes);

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

//Nuevos END-POINTS
router.get(
    Rutas.restaurantes.ultimos.url,
    async (request, response) => {
        try {
            const ultimosRestaurantes = await restauranteService.obtenerUltimos5Restaurantes(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(ultimosRestaurantes));
        } catch (error) {
            response.status(404).send(error);
        }
    }
)

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

router.delete(
    Rutas.id,
    async (request, response) => {
        try {
            const contadorRestauranteEliminado = await restauranteService.eliminarRestaurante(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(contadorRestauranteEliminado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
)

router.put(
    Rutas.id,
    async (request, response) => {
        try {
            const contadorRestauranteActualizado = await restauranteService.actualizarRestaurante(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(contadorRestauranteActualizado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
)


module.exports = router;