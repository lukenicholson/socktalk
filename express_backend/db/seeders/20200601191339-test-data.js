'use strict';


module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Companies', [
      {
        username: 'traderjoes',
        password: 'password',
        name: 'Trader Joes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'safeway',
        password: 'password',
        name: 'Safeway',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
