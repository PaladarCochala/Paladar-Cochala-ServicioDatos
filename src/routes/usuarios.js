'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const usuarioService = require('../app/services/UsuarioService'); 

// api/usuarios/
router.get( Rutas.empty, usuarioService.obtenerUsuarios );

router.post( Rutas.empty, usuarioService.crearUsuario );
router.post( Rutas.empty + "/crearOactualizarUsuario", usuarioService.crearOactualizarUsuario );

// api/usuarios/:email
router.get( Rutas.email, usuarioService.obtenerUnUsuario );

router.delete( Rutas.email, usuarioService.eliminarUsuario );

router.put( Rutas.email, usuarioService.actualizarUsuario );
module.exports = router;