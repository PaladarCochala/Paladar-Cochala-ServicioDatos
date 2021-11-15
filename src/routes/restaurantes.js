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

router.get(Rutas.restaurantes.promedio.servicio, restauranteService.obtener5RestaurantesConMayorServicio);

router.get(Rutas.restaurantes.promedio.sabor, restauranteService.obtener5RestaurantesConMayorSabor);

// api/restaurantes/:id
router.get(Rutas.id, restauranteService.obtenerUnRestaurante);

router.delete(Rutas.id, restauranteService.eliminarRestaurante);

router.put(Rutas.id, restauranteService.actualizarRestaurante);


module.exports = router;