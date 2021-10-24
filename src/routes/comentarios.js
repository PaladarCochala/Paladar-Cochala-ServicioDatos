'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const comentarioService = require('../app/services/ComentarioService');

// api/comentarios/
router.get(
    Rutas.empty,
    async (request, response) => {
        try {
            const comentarios = await comentarioService.obtenerComentarios(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(comentarios));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

router.post(
    Rutas.empty,
    async (request, response) => {
        try {
            const nuevoComentario = await comentarioService.crearComentario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(nuevoComentario));
        } catch (error) {
            response.status(404).send('Error en el proceso de creacion Comentario');
        }
    }
);

// api/restaurantes/:id
router.get(
    Rutas.id,
    async (request, response) => {
        try {
            const comentarioBuscado = await comentarioService.obtenerUnComentario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(comentarioBuscado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

router.delete(
    Rutas.id,
    async (request, response) => {
        try {
            const contadorComentarioEliminado = await comentarioService.eliminarComentario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(contadorComentarioEliminado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

router.put(
    Rutas.id,
    async (request, response) => {
        try {
            const contadorComentarioActualizado = await comentarioService.actualizarComentario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(contadorComentarioActualizado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

module.exports = router;