'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Etiquetas_Restaurantes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            etiquetaId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'Etiquetas',
                    key: 'id'
                }
            },
            restauranteId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'Restaurantes',
                    key: 'id'
                }
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Etiquetas_Restaurantes');
    }
};