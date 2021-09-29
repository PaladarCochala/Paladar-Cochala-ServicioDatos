'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Restaurantes', 
        [   
            {
                nombre: 'Kingdom',
                ubicacion: '100 m',
                promedioSabor: 5,
                promedioServicio: 2,
                logo: 3,
            },
            {
                nombre: 'Panchita',
                ubicacion: '100 m',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: 3,
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Restaurantes', null, {});
    }
};