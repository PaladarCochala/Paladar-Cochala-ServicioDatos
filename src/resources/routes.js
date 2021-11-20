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
        },
        etiqueta: '/etiqueta/:etiqueta',
    },
    usuarios: {
        url: '/usuarios'
    },
    etiquetas: {
        url: '/etiquetas'
    },
    comentarios: {
        url: '/comentarios'
    },

};