'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Comentarios', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            descripcion: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fechaDePublicacion:{
                type: Sequelize.DATE,
                allowNull: true
            }, 
            restauranteId: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Comentarios');
    }
};