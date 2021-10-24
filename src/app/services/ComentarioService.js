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
    },

    eliminarComentario: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorComentarioEliminado = await Comentario.destroy({
                where: {
                    id
                }
            });
            if (contadorComentarioEliminado != 0) {
                return {
                    message: 'Comentario borrado satisfactoriamente',
                    count: contadorComentarioEliminado
                };
            } else {
                response.status(404).json({
                    message: "No se encontro el comentario"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    actualizarComentario: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorComentarioActualizado = await Comentario.update(request.body, {
                where: {
                    id
                }
            });
            if (contadorComentarioActualizado != 0) {
                return {
                    message: 'Comentaio Actualizado satisfactoriamente',
                    count: contadorComentarioActualizado
                };
            } else {
                response.status(404).json({
                    message: "No se encontro el comentario"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    }
}
module.exports = ComentarioService;