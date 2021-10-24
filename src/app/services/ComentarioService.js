const { Comentario } = require('../models');

const ComentarioService = {
    obtenerComentarios: async (request, response) => {
        try {
            let comentarios = await Comentario.findAll();
            return { response : comentarios }
        } catch (error) {
            console.log('=======================================');
            console.log(error);
            console.log('=======================================');
            response.status(500).json({
                message: 'Algo salio mal con el Servidor'
            });
        }
    }
}
module.exports = ComentarioService;