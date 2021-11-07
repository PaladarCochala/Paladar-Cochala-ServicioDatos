'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comentarios', 
        [   
            {
                descripcion: 'Buen gusto',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 1,
                emailUsuario: "dragodes3@gmail.com"
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 2,
                emailUsuario: "dragodes3@gmail.com"
            },
            {
                descripcion: 'Muy buen servicio',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 4,
                emailUsuario: "dragodes3@gmail.com"
            },
            {
                descripcion: 'Me gusta la textura de la comida',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 4,
                emailUsuario: "DaiAnser@gmail.com"
            },
            {
                descripcion: 'No crei que exista una saltenia peor que las del frente del ic norte',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 7,
                emailUsuario: "DaiAnser@gmail.com"            
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 3,
                emailUsuario: "DaiAnser@gmail.com"
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comentarios', null, {});
    }
};