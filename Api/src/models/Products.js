const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('product', {
    id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dimension:{
      type : DataTypes.INTEGER,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    primaryimage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondimage:{
      type: DataTypes.STRING
    },
    category:{
      type: DataTypes.ENUM("Clothing","Hardware", "Accessories"),
    },
    size:{
      type: DataTypes.ENUM("S","M","L","XL")
    },
    dateofcreation:{
      type: DataTypes.DATEONLY
    },
    stock:{
      type: DataTypes.INTEGER
    },
    rating:{
      type: DataTypes.INTEGER
    }

  },{timestamps:false});
};