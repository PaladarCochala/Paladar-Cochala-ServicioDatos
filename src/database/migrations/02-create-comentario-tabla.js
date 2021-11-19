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
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            valoracionSabor: {
                type: Sequelize.DOUBLE,
                allowNull: true
            },
            valoracionServicio: {
                type: Sequelize.DOUBLE,
                allowNull: true
            }, 
            restauranteId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'Restaurantes',
                    key: 'id'
                }
            },
            emailUsuario: {
                type: Sequelize.STRING,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: 'Usuarios',
                    key: 'email'
                }
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Comentarios');
    }
};