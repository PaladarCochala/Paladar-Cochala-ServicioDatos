'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const usuarioService = require('../app/services/UsuarioService'); 

// api/usuarios/
router.get(
    Rutas.empty,
    async (request, response) => {
        try {
            const usuarios = await usuarioService.obtenerUsuarios(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(usuarios));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

router.post(
    Rutas.empty,
    async (request, response) => {
        try {
            const nuevoUsuario = await usuarioService.crearUsuario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(nuevoUsuario));
        } catch (error) {
            response.status(404).send('Error en el proceso de creacion Usuario');
        }
    }
);

// api/usuarios/:email
router.get(
    Rutas.email,
    async (request, response) => {
        try {
            const usuarioBuscado = await usuarioService.obtenerUnUsuario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(usuarioBuscado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
);

router.delete(
    Rutas.email,
    async (request, response) => {
        try {
            const contadorUsuarioEliminado = await usuarioService.eliminarUsuario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(contadorUsuarioEliminado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
)

router.put(
    Rutas.email,
    async (request, response) => {
        try {
            const usuarioActualizado = await usuarioService.actualizarUsuario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(usuarioActualizado));
        } catch (error) {
            response.status(404).send(error);
        }
    }
)
module.exports = router;