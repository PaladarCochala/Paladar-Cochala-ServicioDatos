'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comentarios', 
        [   
            {
                descripcion: 'Buen gusto',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 1,
                nombreUsuario: "UsuarioTest"
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 2,
                nombreUsuario: "UsuarioTest"
            },
            {
                descripcion: 'Muy buen servicio',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 4,
                nombreUsuario: "UsuarioTest"
            },
            {
                descripcion: 'Me gusta la textura de la comida',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 4,
                nombreUsuario: "UsuarioTest"
            },
            {
                descripcion: 'No crei que exista una saltenia peor que las del frente del ic norte',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 7,
                nombreUsuario: "UsuarioTest"            
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-06-25',
                restauranteId: 3,
                nombreUsuario: "UsuarioTest"
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comentarios', null, {});
    }
};