'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', 
        [   
            {
                nickname: 'Dai',
                nombre: 'Augusto',
                esAdmin: false,
                contrasenia: 'daianser',
                correo: 'dai@gmail.com',
                estadoCuenta: 'visible',
                contadorComentario: 5,
                imagenPerfil: "link",
            },
            {
                nickname: 'Aedric',
                nombre: 'Carlos',
                esAdmin: false,
                contrasenia: 'daianser',
                correo: 'aedric@gmail.com',
                estadoCuenta: 'visible',
                contadorComentario: 5,
                imagenPerfil: "link",
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});
    }
};