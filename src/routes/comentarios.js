'use strict';
const express = require('express');
const router = express.Router();
const Rutas = require('../resources/routes');
const comentarioService = require('../app/services/ComentarioService');

router.get(
    Rutas.empty,
    async (request, response) => {
        try {
            const comentarios = await comentarioService.getComentarios(request, response);
            response.send(comentarios)
        }
        catch (error) {
            response.status(404).send(error);
        }
    }
);

router.post(
    Rutas.empty,
    async (request, response) => {
        try {
            const newComentario = await comentarioService.createComentario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(newComentario));
        } catch (error) {
            response.status(404).send('Error while creating Comentario');
        }
    }
);
module.exports = router;