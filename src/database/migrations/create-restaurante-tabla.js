'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Restaurantes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: true
            },
            ubicacion: {
                type: Sequelize.STRING,
                allowNull: true
            },
            promedioSabor: {
                type: Sequelize.FLOAT,
                allowNull: true
            },
            promedioServicio: {
                type: Sequelize.FLOAT,
                allowNull: true
            },
            logo: {
                type: Sequelize.STRING,
                allowNull: true
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Restaurantes');
    }
}