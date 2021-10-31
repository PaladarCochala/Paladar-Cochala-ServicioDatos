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
                type: Sequelize.DOUBLE,
                allowNull: true
            },
            promedioServicio: {
                type: Sequelize.DOUBLE,
                allowNull: true
            },
            urlLogo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            fechaDeCreacion: {
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            contadorDeComentarios: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            rangoDePrecios: {
                type: Sequelize.STRING,
                allowNull: true
            },
            contacto: {
                type: Sequelize.STRING,
                allowNull: true
            },
            urlFacebook: {
                type: Sequelize.STRING,
                allowNull: true
            },
            urlInstagram: {
                type: Sequelize.STRING,
                allowNull: true
            },
            urlYoutube: {
                type: Sequelize.STRING,
                allowNull: true
            },
            urlPedidosYa: {
                type: Sequelize.STRING,
                allowNull: true
            },
            estaActivo: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Restaurantes');
    }
};