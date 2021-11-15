'use strict';

module.exports = {
    empty: '',
    id: '/:id',
    email: '/:email',
    restaurantes: {
        url: '/restaurantes',
        ultimos: {
            url: '/ultimos'
        },
        promedio: {
            servicio: '/servicio',
            sabor: '/sabor'
        }
    },
    usuarios: {
        url: '/usuarios'
    },
    comentarios:{
        url: '/comentarios'
    }
};