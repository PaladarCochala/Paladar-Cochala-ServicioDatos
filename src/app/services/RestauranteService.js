const { Restaurante } = require('../models');
const RestauranteService = {


    getRestaurantes: async (request, response) => {
        try {
            let restaurantes = await Restaurante.findAll({
                raw: true,
                nest: true,
       
            });
            return { response: restaurantes };
        } catch (error) {
            throw error;
        }
    },

    createRestaurante: async (request, response) => {
        try {
            const newRestaurante = await Restaurante.create({
                ...request.body
            });
            const result = {
                message: 'Restaurant created successfully',
                response: newRestaurante
            };
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = RestauranteService;