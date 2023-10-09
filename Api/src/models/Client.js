const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Client', {
    clientId: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    name:{
        type : DataTypes.STRING,
        allowNull:false
    },
    email:{
        type : DataTypes.STRING,
        allowNull:false
    },
    billingaddress:{
        type : DataTypes.TEXT,
    },
    country:{
        type : DataTypes.STRING,
    },
    locality:{
        type : DataTypes.STRING,
    },
    mobilenumber:{
        type : DataTypes.BIGINT,
    }
  },{freezeTableName: true,timestamps:false})}