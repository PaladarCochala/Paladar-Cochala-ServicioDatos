const { response, request } = require('express');
const { Restaurante } = require('../models');

const RestauranteService = {
    obtenerRestaurantes: async (request, response) => {
        try {
            let restaurantes = await Restaurante.findAll();
            return { response: restaurantes }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    obtenerUnRestaurante: async (request, response) => {
        try {
            const { id } = request.params;
            let restauranteBuscado = await Restaurante.findOne({
                where: {
                    id
                }
            });
            if (restauranteBuscado) {
                return { response: restauranteBuscado };
            } else {
                response.status(404).json({
                    message: "No se encontro el restaurante"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    crearRestaurante: async (request, response) => {
        try {
            const nuevoRestaurante = await Restaurante.create(request.body);
            const result = {
                message: 'El restaurante fue creado exitosamente',
                response: nuevoRestaurante
            };
            return result;
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    }
}
module.exports = RestauranteService;