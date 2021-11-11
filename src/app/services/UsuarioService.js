const { Usuario, Comentario } = require('../models');

const UsuarioService = {
    obtenerUsuarios: async (request, response) => {
        try {
            let usuarios = await Usuario.findAll({
                raw: true,
                nest: true
            });
            return response.status(200).send({
                response : usuarios
            });
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    obtenerUnUsuario: async (request, response) => {
        try {
            const { email } = request.params;
            let usuarioBuscado = await Usuario.findOne({
                raw: true,
                nest: true,
                include: [{model: Comentario}],
                where: {
                    email
                }
            });
            if (usuarioBuscado) {
                return response.status(200).send({
                    response : usuarioBuscado
                });
            } else {
                return response.status(404).json({
                    message: "No se encontro el usuario"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    crearUsuario: async (request, response) => {
        try {
            const email = request.body.email
            const [nuevoUsuario, fueCreado] = await Usuario.findOrCreate({
                where : {
                    email
                },
                defaults: request.body   
            });
            if (fueCreado) {
                return response.status(200).send({
                    message: 'El usuario fue creado exitosamente',
                    response: nuevoUsuario
                });
            } else {
                return response.status(200).json({
                    message: "Ya existe un usuario con ese email"
                });
            }   
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    eliminarUsuario: async (request, response) => {
        try {
            const { email } = request.params;
            const contadorRestaurenteEliminado = await Usuario.destroy({
                where: {
                    email
                }
            })
            if (contadorRestaurenteEliminado != 0) {
                return response.status(200).send({ 
                    message: 'Usuario borrado satisfactoriamente', 
                    count: contadorRestaurenteEliminado });
            } else {
                return response.status(404).json({
                    message: "No se encontro el usuario"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    actualizarUsuario: async (request, response) => {
        try {
            const { email } = request.params;
            const contadorUsuarioActualizado = await Usuario.update(request.body, {
                where: {
                    email
                }
            })
            if(contadorUsuarioActualizado != 0) {
                return response.status(200).send({  
                    message: 'Usuario Actualizado satisfactoriamente', 
                    count: contadorUsuarioActualizado });
            } else {
                return response.status(404).json({
                    message: "No se encontro el usuario"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    }
}
module.exports = UsuarioService;