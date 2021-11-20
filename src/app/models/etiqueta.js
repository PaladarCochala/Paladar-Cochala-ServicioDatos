module.exports = (sequelize, DataTypes) => {
    const Etiqueta = sequelize.define('Etiqueta', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      'nombreEtiqueta': DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Etiquetas'
    });

    Etiqueta.associate = function(models){
      Etiqueta.belongsToMany(models.Restaurante,  
        {
          through: 'Etiquetas_Restaurantes',
          as: 'restaurante',
          foreignKey: 'etiquetaId'
        });
    };
  return Etiqueta;
}