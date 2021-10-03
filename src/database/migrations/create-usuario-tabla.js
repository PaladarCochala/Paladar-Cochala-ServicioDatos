'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuarios', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            esAdmin: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            contrasenia: {
                type: Sequelize.STRING,
                allowNull: true
            },
            correo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            estadoCuenta: {
                type: Sequelize.STRING,
                allowNull: true
            },
            contadorComentario: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            imagenPerfil: {
                type: Sequelize.STRING,
                allowNull: true
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Usuarios');
    }
}