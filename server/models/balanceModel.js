const Sequelize = require('sequelize');
const {sequelizeConnection} = require('../config/server/sequelizeConfig')
const user_budget = require ('./userModel');

const  BudgetModel = sequelizeConnection.define(
    'budget',
{
    id_budget:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    budget_tipe:{
      type: Sequelize.INTEGER,
      allowNull: false,
      fields:'budget_tipe',
    },
    amount:{
      type: Sequelize.FLOAT,
      allowNull:false,
      fields:'amount'

    },
    user_budget:{
      type: Sequelize.INTEGER,
      reference: {
        model: user_budget,
        key: 'id_user'
      }
    },
    createdAt:{
      type:Sequelize.DATE,
      fields: 'createdAt'
    },
    updatedAt:{
      type:Sequelize.DATE,
      fields: 'updatedAt'
    }
},
{
    tableName:'budget',
    timestamps: true
}
)

module.exports = BudgetModel

module.exports = Customers;

BudgetModel.belongsTo(UserModel, {
  foreignKey: 'user_budget', targetKey: 'id_user'
});

UserModel.hasMany(BudgetModel,{
  as: 'bugdet'
})
