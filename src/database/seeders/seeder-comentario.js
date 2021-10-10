'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comentarios', 
        [   
            {
                descripcion: 'Buen gusto',
                RestauranteId: 1
            },
            {
                descripcion: 'Me gusto el ambiente',
                RestauranteId: 2
            },
            {
                descripcion: 'Muy buen servicio',
                RestauranteId: 4
            },
            {
                descripcion: 'Me gusta la textura de la comida',
                RestauranteId: 4
            },
            {
                descripcion: 'No crei que exista una saltenia peor que las del frente del ic norte',
                RestauranteId: 7            
            },
            {
                descripcion: 'Me gusto el ambiente',
                RestauranteId: 3
            }

        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comentarios', null, {});
    }
};