'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    customer_name: {
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Customer.hasOne(models.burger)
      }
    }
  });
  return Customer;
};