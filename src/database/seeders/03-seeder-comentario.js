'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Comentarios', 
        [   
            {
                descripcion: 'Buen gusto',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 4.5,
                valoracionServicio: 3,
                restauranteId: 1,
                emailUsuario: "dragodes3@gmail.com"
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 4.5,
                valoracionServicio: 3,
                restauranteId: 2,
                emailUsuario: "dragodes3@gmail.com"
            },
            {
                descripcion: 'Buen servicio recomiendo el lugar',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 4.0,
                valoracionServicio: 5.0,
                restauranteId: 1,
                emailUsuario: "frozst@gmail.com"
            },
            {
                descripcion: 'Buen plato, estab muy delicioso',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 5.0,
                valoracionServicio: 5.0,
                restauranteId: 2,
                emailUsuario: "frozst@gmail.com"
            },
            {
                descripcion: 'Nada mejor que un buen aperitivo',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 3.0,
                valoracionServicio: 3.0,
                restauranteId: 3,
                emailUsuario: "frozst@gmail.com"
            },
            {
                descripcion: 'Muy buen servicio',
                valoracionSabor: 4.5,
                valoracionServicio: 3,
                fechaDePublicacion: '2021-06-25',
                restauranteId: 4,
                emailUsuario: "dragodes3@gmail.com"
            },
            {
                descripcion: 'Me gusta la textura de la comida',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 4.5,
                valoracionServicio: 3,
                restauranteId: 4,
                emailUsuario: "DaiAnser@gmail.com"
            },
            {
                descripcion: 'No crei que exista una saltenia peor que las del frente del ic norte',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 4.5,
                valoracionServicio: 3,
                restauranteId: 7,
                emailUsuario: "DaiAnser@gmail.com"            
            },
            {
                descripcion: 'Me gusto el ambiente',
                fechaDePublicacion: '2021-06-25',
                valoracionSabor: 4.5,
                valoracionServicio: 3,
                restauranteId: 3,
                emailUsuario: "DaiAnser@gmail.com"
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comentarios', null, {});
    }
};