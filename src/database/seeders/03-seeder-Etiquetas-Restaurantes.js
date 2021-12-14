'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Etiquetas_Restaurantes', 
        [   
            {
                etiquetaId: 1,
                restauranteId: 4
            },
            {
                etiquetaId: 2,
                restauranteId: 2
            },
            {
                etiquetaId: 3,
                restauranteId: 2
            },
            {
                etiquetaId: 1,
                restauranteId: 5
            },
            {
                etiquetaId: 1,
                restauranteId: 9
            },
            {
                etiquetaId: 2,
                restauranteId: 1
            },
            {
                etiquetaId: 4,
                restauranteId: 5
            },
            {
                etiquetaId: 2,
                restauranteId: 3
            },
            {
                etiquetaId: 3,
                restauranteId: 1
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Etiquetas_Restaurantes', null, {});
    }
};