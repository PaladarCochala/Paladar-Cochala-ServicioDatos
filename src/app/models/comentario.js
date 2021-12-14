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
          let valorSabor = await sequelize.models.Comentario.sum('valoracionSabor',
            { where : {
              restauranteId : comentario.restauranteId
            }})
          let valorServicio = await sequelize.models.Comentario.sum('valoracionServicio',
          { where : {
            restauranteId : comentario.restauranteId
          }})
          await sequelize.models.Comentario.count({
            where : {
            restauranteId : comentario.restauranteId
          }}).then(res => {
            let promedios = [ valorSabor / res, valorServicio / res]
            return promedios;
          }).then( async res  => {
            await sequelize.models.Restaurante.update({promedioSabor: res[0], promedioServicio: res[1]},
              { where : {
                id : comentario.restauranteId
              },
            })
          })
          await sequelize.models.Restaurante.increment({ contadorDeComentarios : 1 },
          {
            where: {
                id : comentario.restauranteId
            }
          });
        },
        beforeBulkDestroy: async function(id, options){
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
              },
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