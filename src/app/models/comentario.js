module.exports = (sequelize, DataTypes) => {
    const Comentarios = sequelize.define('Comentarios', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'descripcion': DataTypes.STRING,
      'fechaDePublicacion': DataTypes.DATE,
      'RestauranteId': DataTypes.INTEGER
    });
    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.Restaurante,  {foreignKey: 'RestauranteId', as: 'restaurante'});
    };
    return Comentarios;
}