const nodemon = require('nodemon');
const { Comentarios, Restaurante } = require('../models');
const ComentarioService = {


    getComentarios: async (request, response) => {
        try {
            let comentarios = await Comentarios.findAll({
                include: {
                    model: Restaurante,
                    as: 'restaurante',
                    attributes: {exclude: ['RestauranteId']}
                }
       
            });
            return { 'response': comentarios };
        } catch (error) {
            throw error;
        }
    },
    encontrarComentariosPorRestaurante: async(parametros) => {
        let todosLosComentarios = await Comentario.findAll({
            where: parametros,
            attributes: {exclude: 'RestauranteId'}
        });
        return { 'response': todosLosComentarios };
    },

    createComentario: async (request, response) => {
        try {
            const newComentario = await Comentarios.create(request.body);
            const result = {
                message: 'El comentario fue creado exitosamente',
                response: newComentario
            };
            return result;
        } catch (error) {
            throw error;
        }
    },

    deleteComentario: async (request, response) => {
        try {
            const comentarioEliminado = await Comentarios.destroy({
                where: { id: request.params.id }
            });
            return {
                message: "El comentario fue eliminado exitosamente",
                result: comentarioEliminado
            };
        } catch (error) {
            throw error;
        }
    },
    actualizarComentario: async (request, response) => {
        try {
            await Comentarios.update(request.body, { where : {id: request.params.id } });
            let comentario = await Comentarios.findByPk(request.params.id);
            return { message: "El comentario fue actualizado", Comentarios : comentario};
        } catch (error) {
            throw error;
        }
    }
}
module.exports = ComentarioService;