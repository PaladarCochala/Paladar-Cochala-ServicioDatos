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
      'logo': DataTypes.STRING,
    }, {});
    Restaurante.associate = function(models){
        
    };
    return Restaurante;
}