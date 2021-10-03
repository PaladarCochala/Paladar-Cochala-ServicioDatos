module.exports = (sequelize, DataTypes) => {
    const Restaurante = sequelize.define('Usuario', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'nickname': DataTypes.STRING,
      'nombre': DataTypes.STRING,
      'esAdmin': DataTypes.BOOLEAN,
      'contrasenia': DataTypes.STRING,
      'correo': DataTypes.STRING,
      'estadoCuenta': DataTypes.STRING,
      'contadorComentario': DataTypes.INTEGER,
      'imagenPerfil': DataTypes.STRING,
    }, {});
    Restaurante.associate = function(models){
        
    };
    return Restaurante;
}