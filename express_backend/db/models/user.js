'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull:false
    },
    tokenId: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING,
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.isValid = () => true;

  User.prototype.setPassword = function(password) {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  }

  User.prototype.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  User.prototype.toSafeObject = function() {
    return {
      createdAt: this.createdAt,
      email: this.email,
      id: this.id,
      firstName: this.firstName,
      updatedAt: this.updatedAt
    }
  }
  return User;
};



// store = {
//   users: {
//     1: {
//       id: 1,
//       email: 'alissa@gmail.com'
//     }
//   },
//   videos: {
//     1: {
//       id: 1,
//       title: 'Harry Potter',
//       videoSrc: 'blahblah'
//     },
//     2: {
//       id: 2,
//       title: 'Harry Potter 2',
//       videoSrc: 'blahblah'
//     }
//   },
//   session: {
//     token: 'aksjd;lfaskjdf;laksjd;',
//     userId: 1
//   }
// }

