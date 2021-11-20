const { Etiqueta, Restaurante } = require('../models');

const EtiquetaService = {
    obtenerEtiquetas: async (request, response) => {
        try {
            let etiquetas = await Etiqueta.findAll({
                raw: true,
                nest: true,
                order: [['id', 'ASC']]
            });
            return response.status(200).send({
                response : etiquetas
            });
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    obtenerUnaEtiqueta: async (request, response) => {
        try {
            const { id } = request.params;
            let etiquetaBuscada = await Etiqueta.findOne({
                include: [{model: Restaurante,
                            as: 'restaurante'}],
                where: {
                    id
                }
            });
            if (etiquetaBuscada) {
                return response.status(200).send({
                    response : etiquetaBuscada
                });
            } else {
                response.status(404).json({
                    message: "No se encontro la etiqueta"
                });
            }
        } catch (error) {
            console.log(error)
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    crearEtiqueta: async (request, response) => {
        try {
            const nuevaEtiqueta = await Etiqueta.create(request.body);
            return response.status(200).send({
                message: 'La etiqueta fue creada exitosamente',
                response: nuevaEtiqueta
            });
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    eliminarEtiqueta: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorEtiquetaEliminado = await Etiqueta.destroy({
                where: {
                    id
                }
            });
            if (contadorEtiquetaEliminado != 0) {
                return response.status(200).send({ 
                    message: 'Etiqueta borrada satisfactoriamente', 
                    count: contadorEtiquetaEliminado 
                });
            } else {
                return response.status(404).json({
                    message: "No se encontro la etiqueta"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    actualizarEtiqueta: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorEtiquetaActualizado = await Etiqueta.update(request.body, {
                where: {
                    id
                }
            });
            if(contadorEtiquetaActualizado != 0)
            {
                return response.status(200).send({ 
                    message: 'Etiqueta actualizada satisfactoriamente', 
                    count: contadorEtiquetaActualizado 
                });
            }else{
                return response.status(404).json({
                    message: "No se encontro la etiqueta"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },
}
module.exports = EtiquetaService;