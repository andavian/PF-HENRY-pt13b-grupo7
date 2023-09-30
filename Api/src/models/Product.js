const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      primaryimage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryID: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
