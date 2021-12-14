'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', 
        [   
            {
                email: 'paladardev@gmail.com',
                nickname: 'Paladar Cochalo',
                nombre: 'Paladar Cochalo Company',
                contadorComentario: 0,
                urlImagenPerfil: null,
                esAdmin: true,
                estaActivo: true
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});
    }
};