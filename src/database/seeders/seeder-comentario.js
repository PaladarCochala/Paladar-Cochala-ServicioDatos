'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comentarios', 
        [   
            {
                descripcion: 'Buen gusto',
                fechaDePublicacion: '2021-10-17T18:25:43.511Z',
                restauranteId: 1
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-10-17T18:25:43.511Z',
                restauranteId: 2
            },
            {
                descripcion: 'Muy buen servicio',
                fechaDePublicacion: '2021-10-17T18:25:43.511Z',
                restauranteId: 4
            },
            {
                descripcion: 'Me gusta la textura de la comida',
                fechaDePublicacion: '2021-10-17T18:25:43.511Z',
                restauranteId: 4
            },
            {
                descripcion: 'No crei que exista una saltenia peor que las del frente del ic norte',
                fechaDePublicacion: '2021-10-17T18:25:43.511Z',
                restauranteId: 7            
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-10-17T18:25:43.511Z',
                restauranteId: 3
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comentarios', null, {});
    }
};