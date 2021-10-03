'use strict';
const express = require('express');
const router = express.Router();
const Rutas = require('../resources/routes');
const usuarioService = require('../app/services/UsuarioService');

router.get(
    Rutas.empty,
    async (request, response) => {
        try {
            const usuario = await usuarioService.getUsuarios(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(usuario));
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
            const usuario = await usuarioService.getUsuario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(usuario));
        } catch (error) {
            response.status(404).send(error);
        }
    }
)

router.post(
    Rutas.empty,
    async (request, response) => {
        try {
            const newUsuario = await usuarioService.createUsuario(request, response);
            response.set('Content-type', 'application/json');
            response.status(200).end(JSON.stringify(newUsuario));
        } catch (error) {
            response.status(404).send('Error while creating Usuario');
        }
    }
);

router.delete(
    Rutas.id,
    async (request, response) => {
        try {
          const result = await usuarioService.deleteUsuario(request, response);
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
           const result = await usuarioService.actualizarUsuario(request, response);
           response.set('Content-type', 'application/json');
           response.status(200).send(result); 
        } catch (error) {
            console.log(error);
        }
    }
)
module.exports = router;