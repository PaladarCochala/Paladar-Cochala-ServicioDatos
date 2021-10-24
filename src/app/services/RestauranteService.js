const { Restaurante } = require('../models');

const RestauranteService = {
    obtenerRestaurantes: async (request, response) => {
        try {
            let restaurantes = await Restaurante.findAll();
            return { response: restaurantes }
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
                where: {
                    id
                }
            });
            if (restauranteBuscado) {
                return { response: restauranteBuscado };
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
            const nuevoRestaurante = await Restaurante.create(request.body);
            const result = {
                message: 'El restaurante fue creado exitosamente',
                response: nuevoRestaurante
            };
            return result;
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
            })
            if (contadorRestaurenteEliminado != 0) {
                return { 
                    message: 'Restaurante borrado satisfactoriamente', 
                    count: contadorRestaurenteEliminado };
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

    actualizarRestaurante: async (request, response) => {
        try {
            const { id } = request.params;
            const contadorRestauranteActualizado = await Restaurante.update(request.body, {
                where: {
                    id
                }
            })
            if(contadorRestauranteActualizado != 0)
            {
                return { 
                    message: 'Restaurante Actualizado satisfactoriamente', 
                    count: contadorRestauranteActualizado };
            }else{
                response.status(404).json({
                    message: "No se encontro el restaurante"
                });
            }
        } catch (error) {
            response.status(500).json({
                message: "Algo salio mal con el Servidor"
            });
        }
    }
}
module.exports = RestauranteService;