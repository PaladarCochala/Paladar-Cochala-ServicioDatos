'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Etiquetas', 
        [   
            {
                nombreEtiqueta: "Pizza"
            },
            {
                nombreEtiqueta: "Pollo"
            },
            {
                nombreEtiqueta: "Comida Rapida"
            },
            {
                nombreEtiqueta: "Comida Vegetariana"
            },
            {
                nombreEtiqueta: "Helados"
            },
            {
                nombreEtiqueta: "Comida China"
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Etiquetas', null, {});
    }
};