'use strict';
const express = require('express')
const router = express.Router();
const Rutas = require('../resources/routes');
const etiquetaService = require('../app/services/EtiquetaService'); 

// api/etiquetas/
router.get( Rutas.empty, etiquetaService.obtenerEtiquetas);

router.post(Rutas.empty, etiquetaService.crearEtiqueta);

// api/etiquetas/:id
router.get( Rutas.id, etiquetaService.obtenerUnaEtiqueta);

router.delete(Rutas.id, etiquetaService.eliminarEtiqueta);

router.put(Rutas.id, etiquetaService.actualizarEtiqueta);

module.exports = router;