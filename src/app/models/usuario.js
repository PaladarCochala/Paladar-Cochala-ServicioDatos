module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
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
    Usuario.associate = function(models){
        
    };
    return Usuario;
}