module.exports = (sequelize, DataTypes) => {
    const Restaurante = sequelize.define('Restaurante', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'nombre': DataTypes.STRING,
      'ubicacion': DataTypes.STRING,
      'promedioSabor': DataTypes.DOUBLE,
      'promedioServicio': DataTypes.DOUBLE,
      'urlLogo': DataTypes.STRING(1024),
      'fechaDeCreacion': DataTypes.DATE,
      'contadorDeComentarios': DataTypes.INTEGER,
      'rangoDePrecios': DataTypes.STRING,
      'contacto': DataTypes.STRING,
      'urlFacebook': DataTypes.STRING,
      'urlInstagram': DataTypes.STRING,
      'urlYoutube': DataTypes.STRING,
      'urlPedidosYa': DataTypes.STRING,
      'estaActivo': DataTypes.BOOLEAN,
    }, {});

    Restaurante.associate = function(models){
      Restaurante.hasMany(models.Comentario, 
        {
          foreignKey: 'restauranteId',
          constraints: false
        });
      Restaurante.belongsToMany(models.Etiqueta, 
        {
          through: 'Etiquetas_Restaurantes',
          as: 'Etiquetas',
          foreignKey: 'restauranteId'
        });
    };
    return Restaurante;
}