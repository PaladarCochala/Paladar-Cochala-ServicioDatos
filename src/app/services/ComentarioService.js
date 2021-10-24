const { Comentario } = require('../models');

const ComentarioService = {
    obtenerComentarios: async (request, response) => {
        try {
            let comentarios = await Comentario.findAll();
            return { response : comentarios }
        } catch (error) {
            response.status(500).json({
                message: 'Algo salio mal con el Servidor'
            });
        }
    },

    obtenerUnComentario: async (request, response) => {
        try {
            const { id } = request.params;
            let comentarioBuscado = await Comentario.findOne({
                where: {
                    id
                }
            });
            if (comentarioBuscado) {
                return { response : comentarioBuscado };
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

    crearComentario: async (request, response) => {
        try {
            const nuevoComentario = await Comentario.create(request.body);
            const result = {
                message: 'El restaurante fue creado exitosamente',
                response: nuevoComentario
            };
            return result;
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    }
}
module.exports = ComentarioService;