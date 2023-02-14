'use strict';
module.exports = (sequelize, DataTypes) => {
  const Licencas = sequelize.define('Licencas', {
    numero: DataTypes.STRING,
    orgaoambiental: DataTypes.STRING,
    emissao: DataTypes.DATEONLY,
    validade: DataTypes.DATEONLY
  }, {});
  Licencas.associate = function(models) {
    Licencas.belongsTo(models.Empresas, {foreignKey: 'licenca_id'})
  };
  return Licencas;
};