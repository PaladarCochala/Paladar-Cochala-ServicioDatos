module.exports = (sequelize, DataTypes) => {
    const Etiquetas_Restaurante = sequelize.define('Etiquetas_Restaurante', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      'etiquetaId': DataTypes.INTEGER,
      'restauranteId': DataTypes.INTEGER
    },
    {
      timestamps: false
    });

    Etiquetas_Restaurante.associate = function(models){

    };
    return Etiquetas_Restaurante;
}