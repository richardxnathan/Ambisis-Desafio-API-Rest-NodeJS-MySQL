'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empresas = sequelize.define('Empresas', {
    razaosocial: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    bairro: DataTypes.STRING,
    complemento: DataTypes.STRING
  }, {});
  Empresas.associate = function(models) {
    Empresas.hasMany(models.Licencas, {foreignKey: 'licenca_id'})
  };
  return Empresas;
};