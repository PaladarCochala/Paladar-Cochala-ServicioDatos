module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuarios', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      'nickname': DataTypes.STRING,
      'nombre': DataTypes.STRING,
      'contrasenia': DataTypes.STRING,
      'correo': DataTypes.STRING,
      'contadorComentario': DataTypes.INTEGER,
      'urlImagenPerfil': DataTypes.STRING,
      'esAdmin': DataTypes.BOOLEAN,
      'estaActivo': DataTypes.BOOLEAN
    },
    {
      timestamps: false
    });
    return Usuario;
}