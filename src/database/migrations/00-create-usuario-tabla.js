'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuarios', {
            email: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: true
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: true
            },
            contrasenia: {
                type: Sequelize.STRING,
                allowNull: true
            },
            correo: {
                type: Sequelize.STRING,
                allowNull: true
            },    
            contadorComentario: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            urlImagenPerfil: {
                type: Sequelize.STRING,
                allowNull: true
            },
            esAdmin: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            estaActivo: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Usuarios');
    }
};