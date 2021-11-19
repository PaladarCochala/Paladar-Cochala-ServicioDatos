const { Restaurante, Comentario } = require('../models');

const RestauranteService = {
    obtenerRestaurantes: async (request, response) => {
        try {
            let restaurantes = await Restaurante.findAll({
                raw: true,
                nest: true,
                order: [['id', 'ASC']]
            });
            return response.status(200).send({
                response : restaurantes
            });
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    obtenerUnRestaurante: async (request, response) => {
        try {
            const { id } = request.params;
            let restauranteBuscado = await Restaurante.findOne({
                include: [{model: Comentario}],
                where: {
                    id
                }
            });
            if (restauranteBuscado) {
                return response.status(200).send({
                    response : restauranteBuscado
                });
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

    crearRestaurante: async (request, response) => {
        try {
            request.body.promedioSabor = 0;
            request.body.promedioServicio = 0;
            request.body.contadorDeComentarios = 0;
            const nuevoRestaurante = await Restaurante.create(request.body);
            return response.status(200).send({
                message: 'El restaurante fue creado exitosamente',
                response: nuevoRestaurante
            });
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    eliminarRestaurante: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorRestaurenteEliminado = await Restaurante.destroy({
                where: {
                    id
                }
            });
            if (contadorRestaurenteEliminado != 0) {
                return response.status(200).send({ 
                    message: 'Restaurante borrado satisfactoriamente', 
                    count: contadorRestaurenteEliminado 
                });
            } else {
                return response.status(404).json({
                    message: "No se encontro el restaurante"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    actualizarRestaurante: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorRestauranteActualizado = await Restaurante.update(request.body, {
                where: {
                    id
                }
            });
            if(contadorRestauranteActualizado != 0)
            {
                return response.status(200).send({ 
                    message: 'Restaurante Actualizado satisfactoriamente', 
                    count: contadorRestauranteActualizado 
                });
            }else{
                return response.status(404).json({
                    message: "No se encontro el restaurante"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },

    //Nuevos END-POINTS
    obtenerUltimos5Restaurantes: async(require, response) => {
        try {
            let ultimosRestaurantes = await Restaurante.findAll({
                raw: true,
                nest: true,
                limit: 5,
                order: [['id', 'DESC']]
            });
            return response.status(200).send({ 
                response: ultimosRestaurantes 
            });
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },
    obtener5RestaurantesConMayorServicio: async(require, response) => {
        try {
            let servicioRestaurantes = await Restaurante.findAll({
                raw: true,
                nest: true,
                limit: 5,
                order: [['promedioServicio', 'DESC']]
            });
            return response.status(200).send({ 
                response: servicioRestaurantes 
            });
        } catch (error) {
            console.log(error)
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    },
    obtener5RestaurantesConMayorSabor: async(require, response) => {
        try {
            let saborRestaurantes = await Restaurante.findAll({
                raw: true,
                nest: true,
                limit: 5,
                order: [['promedioSabor', 'DESC']]
            });
            return response.status(200).send({ 
                response: saborRestaurantes 
            });
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    }
}
module.exports = RestauranteService;