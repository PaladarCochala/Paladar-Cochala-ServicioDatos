'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Restaurantes', 
        [   
            {
                nombre: 'Chinkens Kingdom',
                ubicacion: 'Av. Peru',
                promedioSabor: 5,
                promedioServicio: 3,
                logo: null,
                fechaDeCreacion: '2021-10-01T18:25:43.511Z',
                contadorDeResenias:  0,
            },
            {
                nombre: 'Panchita',
                ubicacion: 'Av. Blanco Galindo km. 4',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: '2021-10-01T18:25:43.511Z',
                contadorDeResenias:  0,
            },
            {
                nombre: 'Pollos Chester',
                ubicacion: 'IC Norte 2',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: '2021-10-01T18:25:43.511Z',
                contadorDeResenias:  0,
            },
            {
                nombre: 'Pizza OverTime',
                ubicacion: 'Av. Juan de la Rosa',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion:'2021-10-01T18:25:43.511Z',
                contadorDeResenias:  0,
            },
            {
                nombre: 'Pizza Villa Esperanza',
                ubicacion: 'Av. Ecologica',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: '2021-10-01T18:25:43.511Z',
                contadorDeResenias:  0,
            },
            {
                nombre: 'Cafe Capresso',
                ubicacion: 'Av. Salamanca N. 594',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: null,
                contadorDeResenias:  0,
            },
            {
                nombre: 'Salteñeria Castores',
                ubicacion: 'Plaza Colon',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: null,
                contadorDeResenias:  0,
            },
            {
                nombre: 'Wistupikus',
                ubicacion: 'Av. Ayacucho & Heroinas',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: null,
                contadorDeResenias:  0,
            },
            {
                nombre: 'Pizzeria Elis',
                ubicacion: 'Plaza Colon',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: null,
                contadorDeResenias:  0,
            },
            {
                nombre: 'Planchitas Originales',
                ubicacion: 'Lado Campo Ferial, Pacara N. 1714',
                promedioSabor: 2.5,
                promedioServicio: 4,
                logo: null,
                fechaDeCreacion: null,
                contadorDeResenias:  0,
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Restaurantes', null, {});
    }
};