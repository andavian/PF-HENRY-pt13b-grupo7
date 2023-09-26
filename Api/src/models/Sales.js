const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('sale', {
    id: {
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    client_id:{
        type : DataTypes.STRING,
    },
    quantity:{
        type : DataTypes.INTEGER,
    },
    order_address:{
        type : DataTypes.TEXT,
    },
    order_date:{
        type : DataTypes.DATEONLY,
    },
    order_status:{
        type : DataTypes.ENUM("pending","delivered","canceled"),
    },
  },{timestamps:false})}