verificarAtributosComentarios = (request, response, next) => {
    if ( request.body.sesionIniciado == true ) {
        if ( (request.body.valoracionSabor != null) && (request.body.valoracionServicio != null) ) {
            next();
        } else {
            return response.status(400).json({
                message: 'No existen valores en la valoracion sabor y/o promedio'
            });
        }
    } else {
        return response.status(400).json({
            message: 'Se necesita que este logeado en la Aplicacion'
        });
    }
};

const verificarComentario = {
    verificarAtributosComentarios: verificarAtributosComentarios
};

module.exports = verificarComentario;