'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', 
        [   
            {
                nickname: 'Dai',
                nombre: 'Jose Augusto Valdez Calero',
                contrasenia: 'daianser',
                correo: 'dai@gmail.com',
                contadorComentario: 0,
                urlImagenPerfil: null,
                esAdmin: true,
                estaActivo: true
            },
            {
                nickname: 'Aedric',
                nombre: 'Carlos Edwin Vargas Sandoval',
                contrasenia: 'minimo1',
                correo: 'aedric@gmail.com',
                contadorComentario: 0,
                urlImagenPerfil: null,
                esAdmin: false,
                estaActivo: true
            },
            {
                nickname: 'SenseKarma',
                nombre: 'Juan Jose Quiroga Gonzales',
                contrasenia: 'minimo2',
                correo: 'jj@gmail.com',
                contadorComentario: 0,
                urlImagenPerfil: null,
                esAdmin: false,
                estaActivo: true
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});
    }
};