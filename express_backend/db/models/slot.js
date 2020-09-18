'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      companyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      imgSrc: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Item.associate = function(models) {
    Item.belongsTo(models.Company, { foreignKey: 'companyId', as: 'company'})
  };
  return Item;
};