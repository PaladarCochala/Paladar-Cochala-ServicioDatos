module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('Comentario', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'descripcion': DataTypes.STRING,
      'fechaDePublicacion': DataTypes.DATE,
      'nombreUsuario': DataTypes.STRING,
      'restauranteId': DataTypes.INTEGER
    },
    {
      timestamps: false,

      hooks: {
        afterCreate: async function(comentario, options){

          await Comentario.update({description: 'hook'},{ 
            where: {
              id: comentario.id
            },
            transaction: options.transaction
          });
          console.log("after")
          console.log(comentario.id)
          /*const { transaction } = options;
          const contadorRestauranteActualizado= await models.Restaurante.increment(contadorDeComentarios,{
            //include: [{model: Comentario}],
            where: {
                id: comentario.RestauranteId
            },
            transaction,
          });
          console.log(contadorRestauranteActualizado)*/
        }
      }
    });

    Comentario.associate = function(models){
      Comentario.belongsTo(models.Restaurante, 
        { 
          foreignKey : 'restauranteId',
          constraints: false,
          as: 'restaurante'
        });
    };
    return Comentario;
}