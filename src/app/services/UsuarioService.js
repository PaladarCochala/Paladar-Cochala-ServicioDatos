const { response, request } = require('express');
const { Usuario } = require('../models');

const UsuarioService = {
    obtenerUsuarios: async (request, response) => {
        try {
            let usuarios = await Usuario.findAll();
            return { response: usuarios }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    obtenerUnUsuario: async (request, response) => {
        try {
            const { id } = request.params;
            let usuarioBuscado = await Usuario.findOne({
                where: {
                    id
                }
            });
            if (usuarioBuscado) {
                return { response: usuarioBuscado };
            } else {
                response.status(404).json({
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
            const nuevoUsuario = await Usuario.create(request.body);
            const result = {
                message: 'El usuario fue creado exitosamente',
                response: nuevoUsuario
            };
            return result;
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    eliminarUsuario: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorRestaurenteEliminado = await Usuario.destroy({
                where: {
                    id
                }
            })
            if (contadorRestaurenteEliminado != 0) {
                return { 
                    message: 'Usuario borrado satisfactoriamente', 
                    count: contadorRestaurenteEliminado };
            } else {
                response.status(404).json({
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
            const { id } = request.params;
            const contadorUsuarioActualizado = await Usuario.update(request.body, {
                where: {
                    id
                }
            })
            if(contadorUsuarioActualizado != 0)
            {
                return { 
                    message: 'Usuario Actualizado satisfactoriamente', 
                    count: contadorUsuarioActualizado };
            }else{
                response.status(404).json({
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