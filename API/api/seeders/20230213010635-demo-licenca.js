'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Licencas', [
      {
        licenca_id: 2,
        numero: "hfuiahfuigdauiuf1fd4a8747da48adsa47d78a",
        orgaoambiental: "IBGE",
        emissao: "2020-02-01",
        validade: "2023-02-01",
        createdAt: new Date(),
        updatedAt: new Date()
			},
			{
        licenca_id: 2,
        numero: "fdoiajofias89479das47984das",
        orgaoambiental: "IBAMA",
        emissao: "2021-02-01",
        validade: "2024-02-01",
        createdAt: new Date(),
        updatedAt: new Date()
			},
			{
        licenca_id: 3,
        numero: "hd1sa64d8sa94ds7adsa8d84sa",
        orgaoambiental: "ACAPREMA",
        emissao: "2022-02-01",
        validade: "2050-02-01",
        createdAt: new Date(),
        updatedAt: new Date()
			},
			{
        licenca_id: 4,
        numero: "48A9S4D79DAS7DA84D7SA84DS7ADAS",
        orgaoambiental: "IBGE",
        emissao: "2019-02-01",
        validade: "2023-02-01",
        createdAt: new Date(),
        updatedAt: new Date()
			}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Licencas', null, {});
  }
};
