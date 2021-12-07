'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const comentarioService = require('../app/services/ComentarioService');
const { verificarComentario } = require('../middleware')

// api/comentarios/
router.get( Rutas.empty, comentarioService.obtenerComentarios );

router.post( 
    Rutas.empty,
    //[verificarComentario.verificarAtributosComentarios],
    comentarioService.crearComentario );

// api/comentaios/:id
router.get( Rutas.id, comentarioService.obtenerUnComentario );

router.delete( Rutas.id, comentarioService.eliminarComentario );

router.put( Rutas.id, comentarioService.actualizarComentario );

// api/comentaios/restaurante/:restauranteId/Usuario/:emailUsuario
router.get('/restaurante/:restauranteId/Usuario/:emailUsuario', comentarioService.obtenerMiComentario);

// api/comentaios/restaurante/:restauranteId
router.get( '/restaurante/:restauranteId', comentarioService.obtenerComentariosPorRestaurante);
router.get( '/detallado/restaurante/:restauranteId', comentarioService.obtenerComentariosDetalladosPorRestaurante);

module.exports = router;