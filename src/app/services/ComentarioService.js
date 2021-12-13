const { Comentario, Restaurante, Usuario } = require('../models');

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
            const nuevoComentario = await Comentario.create(request.body);
            return response.status(200).send({
                message: 'El comentario fue creado exitosamente',
                response: nuevoComentario
            });

        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    crearComentario2: async (request, response) => {
        try {
            const emailUsuario = request.body.emailUsuario;
            const restauranteId = request.body.restauranteId;
            let comentarioBuscado = await Comentario.findOne({
                where: {
                    emailUsuario,
                    restauranteId
                }
            });

            if (comentarioBuscado) {
                return response.status(200).send({
                    message: "El usuario ya comento el restaurante"
                });
            } else {
                const nuevoComentario = await Comentario.create(request.body);
                return response.status(200).send({
                    message: 'El comentario fue creado exitosamente',
                    response: nuevoComentario
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
            const comentario = await Comentario.findOne({
                where: {
                    id
                }
            })
            const contadorComentarioEliminado = await Comentario.destroy({
                where: {
                    id
                }
            });
            if (contadorComentarioEliminado != 0) {
                let valorSabor = await Comentario.sum('valoracionSabor',
                    { where : {
                    restauranteId : comentario.restauranteId
                    }})
                let valorServicio = await Comentario.sum('valoracionServicio',
                { where : {
                    restauranteId : comentario.restauranteId
                }})
                await Comentario.count({
                    where : {
                    restauranteId : comentario.restauranteId
                }}).then(res => {
                    let promedios = [ valorSabor / res, valorServicio / res]
                    return promedios;
                }).then( async res  => {
                    await Restaurante.update({promedioSabor: res[0], promedioServicio: res[1]},
                    { where : {
                        id : comentario.restauranteId
                    },
                    })
                })
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
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    obtenerMiComentario: async (request, response) => {
        try {
            const { emailUsuario } = request.params;
            const { restauranteId } = request.params;
            let comentarioBuscado = await Comentario.findOne({
                where: {
                    emailUsuario,
                    restauranteId
                },
                attributes: { exclude: ['emailUsuario']},
                include: [{
                    model: Usuario,
                    as: 'usuario',
                    attributes: { exclude: ['contrasenia', 'contadorComentario', 'esAdmin', 'estaActivo'] }
                }]
            });
            if (comentarioBuscado) {
                return response.status(200).send({
                    estaComentadoElRestaurante : true,
                    response : comentarioBuscado 
                });
            } else {
                return response.status(200).send({
                    estaComentadoElRestaurante : false,
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