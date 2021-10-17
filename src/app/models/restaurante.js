module.exports = (sequelize, DataTypes) => {
    const Restaurante = sequelize.define('Restaurante', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'nombre': DataTypes.STRING,
      'ubicacion': DataTypes.STRING,
      'promedioSabor': DataTypes.FLOAT,
      'promedioServicio': DataTypes.FLOAT,
      'fechaCreacion': DataTypes.DATE,
      'logo': DataTypes.STRING,
      'contadorDeResenias': DataTypes.INTEGER
    });
    Restaurante.associate = function(models){
        Restaurante.hasMany(models.Comentarios, {as: 'comentarios'});
    };
    return Restaurante;
}