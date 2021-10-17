const { Restaurante } = require('../models');
const RestauranteService = {

    getRestaurantes: async (request, response) => {
        try {
            let restaurantes = await Restaurante.findAll({
                include: ['comentarios'],
                order: [
                    ['id', 'ASC']
                ]
            });
            return { response: restaurantes };
        } catch (error) {
            throw error;
        }
    },

    getRestaurante: async (request, response) => {
        try {
            let restaurante = await Restaurante.findByPk(request.params.id, {
                include: ['comentarios']
            });
            return { response: restaurante};
        } catch (error) {
            throw error;
        }
    },

    createRestaurante: async (request, response) => {
        try {
            const newRestaurante = await Restaurante.create(request.body);
            const result = {
                message: 'El restaurante fue creado exitosamente',
                response: newRestaurante
            };
            return result;
        } catch (error) {
            throw error;
        }
    },

    deleteRestaurante: async (request, response) => {
        try {
            const restauranteEliminado = await Restaurante.destroy({
                where: { id: request.params.id }
            });
            return {
                message: "El restaurante fue eliminado exitosamente",
                result: restauranteEliminado
            };
        } catch (error) {
            throw error;
        }
    },
    actualizarRestaurante: async (request, response) => {
        try {
            await Restaurante.update(request.body, { where : {id: request.params.id } });
            let restaurante = await Restaurante.findByPk(request.params.id);
            return { message: "El restaurante fue actualizado", Restaurante : restaurante};

        } catch (error) {
            throw error;
        }
    }
}
module.exports = RestauranteService;