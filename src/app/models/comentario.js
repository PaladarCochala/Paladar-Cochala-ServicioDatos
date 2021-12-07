module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('Comentario', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'descripcion': DataTypes.STRING,
      'fechaDePublicacion': DataTypes.DATE,
      'valoracionSabor': DataTypes.DOUBLE,
      'valoracionServicio': DataTypes.DOUBLE,
      'emailUsuario': DataTypes.STRING,
      'restauranteId': DataTypes.INTEGER
    },
    {
      timestamps: false,

      hooks: {
        afterCreate: async function(comentario, options){
          await sequelize.models.Restaurante.increment({ contadorDeComentarios : 1 },
          {
            where: {
                id : comentario.restauranteId
            }
          });
        },
        beforeBulkDestroy: async function(id, options){
          console.log(id.where.id)
          console.log("hola")
          const comentario = await sequelize.models.Comentario.findOne({
            raw: true,
            nest: true,
            where: {
              id: id.where.id
            }
            });
          if(comentario) {
            await sequelize.models.Restaurante.decrement({ contadorDeComentarios : 1 },
            {
              where: {
                id : comentario.restauranteId
              }
            });
          }
        },
      }
    });

    Comentario.associate = function(models){
      Comentario.belongsTo(models.Restaurante, 
        { 
          foreignKey : 'restauranteId',
          constraints: false,
          as: 'restaurante'
        });
      Comentario.belongsTo(models.Usuario,
        {
          foreignKey : 'emailUsuario',
          constraints : false,
          as: 'usuario'
        });
    };
    return Comentario;
}