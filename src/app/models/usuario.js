module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      'email': {
        type: DataTypes.STRING,
        primaryKey: true
      },
      'nickname': DataTypes.STRING,
      'nombre': DataTypes.STRING,
      'contrasenia': DataTypes.STRING,
      'contadorComentario': DataTypes.INTEGER,
      'urlImagenPerfil': DataTypes.STRING,
      'esAdmin': DataTypes.BOOLEAN,
      'estaActivo': DataTypes.BOOLEAN
    },
    {
      timestamps: false
    });

    Usuario.associate = function(models){
      Usuario.hasMany(models.Comentario, 
        {
          foreignKey: 'emailUsuario',
          constraints: false
        });
    };
    return Usuario;
}