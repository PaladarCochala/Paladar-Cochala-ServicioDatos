'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const ComentarioService = require('../app/services/ComentarioService');

// api/comentarios/
router.get(
    Rutas.empty,
    async (request, response) => {
        try {
            const comentarios = await ComentarioService.obtenerComentarios(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(comentarios));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

module.exports = router;