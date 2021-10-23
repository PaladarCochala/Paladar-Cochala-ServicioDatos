module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('Comentarios', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      'descripcion': DataTypes.STRING,
      'fechaDePublicacion': DataTypes.DATE,
      'restauranteId': DataTypes.INTEGER
    },
    {
      timestamps: false
    });

    return Comentario;
}