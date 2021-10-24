module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('Comentario', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'descripcion': DataTypes.STRING,
      'fechaDePublicacion': DataTypes.DATE,
      'nombreUsuario': DataTypes.STRING,
      'restauranteId': DataTypes.INTEGER
    },
    {
      timestamps: false
    });

    Comentario.associate = function(models){
      Comentario.belongsTo(models.Restaurante, 
        { 
          foreingKey : 'restauranteId',
          constraints: false,
          as: 'restaurante'
        });
    };
    return Comentario;
}