'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Licencas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      licenca_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Empresas', key: 'id'}
      },
      numero: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orgaoambiental: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emissao: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      validade: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Licencas');
  }
};