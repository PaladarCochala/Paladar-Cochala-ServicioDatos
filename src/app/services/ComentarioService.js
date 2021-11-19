const { Comentario, Usuario } = require('../models');

const ComentarioService = {
    obtenerComentarios: async (request, response) => {
        try {
            let comentarios = await Comentario.findAll({
                raw: true,
                nest: true,
                order: [['id', 'ASC']]
            });
            return response.status(200).send({
                response : comentarios
            });
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
                return response.status(200).send({
                    response : comentarioBuscado 
                });
            } else {
                return response.status(404).json({
                    message: "No se encontro el comentario"
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
            const sesionIniciado = request.body.sesionIniciado;
            if(sesionIniciado == true) {
                const nuevoComentario = await Comentario.create(request.body);
                return response.status(200).send({
                    message: 'El comentario fue creado exitosamente',
                    response: nuevoComentario
                });
            } else {
                return response.status(400).json({
                    message: 'Se necesita que este logeado en la Aplicacion',
                });
            }
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
                return response.status(200).send({
                    message: 'Comentario borrado satisfactoriamente',
                    count: contadorComentarioEliminado
                });
            } else {
                return response.status(404).json({
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
                return response.status(200).send({
                    message: 'Comentaio Actualizado satisfactoriamente',
                    count: contadorComentarioActualizado
                });
            } else {
                return response.status(404).json({
                    message: "No se encontro el comentario"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    //Otros funciones para end-points
    obtenerComentariosPorRestaurante: async (request, response) => {
        try {
            const { restauranteId } = request.params;
            let comentarios = await Comentario.findAll({
                raw: true,
                nest: true,
                where: { restauranteId },
                order: [['id', 'ASC']]
            });
            if(comentarios.length != 0)
            {
                return response.status(200).send({ 
                    response: comentarios 
                });
            } else {
                return response.status(404).json({ 
                    message: "Este restaurante no tiene comentarios" 
                    });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    obtenerComentariosDetalladosPorRestaurante: async (request, response) => {
        try {
            const { restauranteId } = request.params;
            let comentarios = await Comentario.findAll({
                raw: true,
                nest: true,
                where: { restauranteId },
                order: [['id', 'ASC']],
                attributes: { exclude: ['emailUsuario']},
                include: [{
                    model: Usuario,
                    as: 'usuario',
                    attributes: { exclude: ['contrasenia', 'contadorComentario', 'esAdmin', 'estaActivo'] }
                }]
            });
            if(comentarios.length != 0)
            {
                return response.status(200).send({ 
                    response: comentarios 
                });
            } else {
                return response.status(404).json({ 
                    message: "Este restaurante no tiene comentarios" 
                    });
            }
        } catch (error) {
            console.log('======================================================')
            console.log(error)
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    }
}
module.exports = ComentarioService;