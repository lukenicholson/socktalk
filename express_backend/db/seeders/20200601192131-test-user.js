'use strict';

const bcrypt = require("bcryptjs");

function createPassword() {
  return bcrypt.hashSync("password");
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        email: 'alissa@gmail.com',
        hashedPassword: createPassword(),
        phoneNumber: '8057225436',
        firstName: 'alissa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'bob@gmail.com',
        hashedPassword: createPassword(),
        phoneNumber: '805722545',
        firstName: 'bob',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'brandon@gmail.com',
        hashedPassword: createPassword(),
        phoneNumber: '8057225434',
        firstName: 'brandon',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
