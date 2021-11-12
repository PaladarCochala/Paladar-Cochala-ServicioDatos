'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const restauranteService = require('../app/services/RestauranteService'); 

// api/restaurantes/
router.get(Rutas.empty, restauranteService.obtenerRestaurantes);

router.post(Rutas.empty, restauranteService.crearRestaurante);

//Nuevos END-POINTS
router.get(Rutas.restaurantes.ultimos.url, restauranteService.obtenerUltimos5Restaurantes);

// api/restaurantes/:id
router.get(Rutas.id, restauranteService.obtenerUnRestaurante);

router.delete(Rutas.id, restauranteService.eliminarRestaurante);

router.put(Rutas.id, restauranteService.actualizarRestaurante);


module.exports = router;