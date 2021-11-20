'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Etiquetas', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombreEtiqueta: {
                type: Sequelize.STRING,
                allowNull: true
            },
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Etiquetas');
    }
};