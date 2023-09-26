const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('client', {
    id: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    name:{
        type : DataTypes.STRING,
        allowNull:false
    },
    password:{
        type : DataTypes.TEXT,
        allowNull:false
    },
    billingaddress:{
        type : DataTypes.TEXT,
    },
    country:{
        type : DataTypes.INTEGER,
    },
    locality:{
        type : DataTypes.STRING,
    },
    mobilenumber:{
        type : DataTypes.INTEGER,
    }
  },{timestamps:false})}