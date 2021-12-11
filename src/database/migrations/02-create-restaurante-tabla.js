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
            descripcion: {
                type: Sequelize.TEXT,
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
                type: Sequelize.TEXT,
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
                type: Sequelize.INTEGER,
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
            },
            ubicacionMaps: {
                type: Sequelize.STRING,
                allowNull: true
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Restaurantes');
    }
};