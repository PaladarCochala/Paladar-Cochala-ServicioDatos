const { Usuario } = require('../models');
const UsuarioService = {


    getUsuarios: async (request, response) => {
        try {
            let usuarios = await Usuario.findAll({
                raw: true,
                nest: true,
       
            });
            return { response: usuarios };
        } catch (error) {
            throw error;
        }
    },

    getUsuario: async (request, response) => {
        try {
            let usuario = await Usuario.findByPk(request.params.id);
            return { response: usuario};
        } catch (error) {
            throw error;
        }
    },

    createUsuario: async (request, response) => {
        try {
            const newUsuario = await Usuario.create({
                ...request.body
            });
            const result = {
                message: 'El usuario fue creado exitosamente',
                response: newUsuario
            };
            return result;
        } catch (error) {
            throw error;
        }
    },

    deleteUsuario: async (request, response) => {
        try {
            const usuarioEliminado = await Usuario.destroy({
                where: { id: request.params.id }
            });
            return {
                message: "El usuario fue eliminado exitosamente",
                result: usuarioEliminado
            };
        } catch (error) {
            throw error;
        }
    },
    actualizarUsuario: async (request, response) => {
        try {
            await Usuario.update(request.body, { where : {id: request.params.id } });
            let usuario = await Usuario.findByPk(request.params.id);
            return { message: "El usuario fue actualizado", Usuario : usuario};

        } catch (error) {
            throw error;
        }
    }
}
module.exports = UsuarioService;