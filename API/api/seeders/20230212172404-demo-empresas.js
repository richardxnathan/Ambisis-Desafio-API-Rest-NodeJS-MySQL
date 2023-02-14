'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresas', [
      {
        razaosocial: "Beatriz LTDA",
        cnpj: "1234567891011",
        cep: "89070020",
        cidade: "Doutor Pedrinho",
        estado: "Santa Catarina",
        bairro: "Ribeirão Rico",
        complemento: "Final da Rua",
        createdAt: new Date(),
        updatedAt: new Date()
			},
			{
				razaosocial: "Marlete LTDA",
        cnpj: "11111111111111",
        cep: "89020020",
        cidade: "Bombinhas",
        estado: "SC",
        bairro: "Morrinhos",
        complemento: "Behind of Cemitery",
        createdAt: new Date(),
        updatedAt: new Date()
			},
			{
				razaosocial: "Jeferson LTDA",
        cnpj: "55555555555555",
        cep: "89070070",
        cidade: "Gaspar",
        estado: "DF",
        bairro: "Coloninha",
        complemento: "Não possui.",
        createdAt: new Date(),
        updatedAt: new Date()
			},
			{
				razaosocial: "Ricardão LTDA",
        cnpj: "69696969696969",
        cep: "89020070",
        cidade: "Blumenhell",
        estado: "Santa Catrina",
        bairro: "Reino do Garcia",
        complemento: "Apartamento 01",
        createdAt: new Date(),
        updatedAt: new Date()
			}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Empresas', null, {});
  }
};
