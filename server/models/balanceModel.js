const Sequelize = require('sequelize');
const {sequelizeConnection} = require('../config/server/sequelizeConfig')

const  BalanceModel = sequelizeConnection.define(
    'balance',
{
    id_balance:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    incomit: {
        type: Sequelize.FLOAT,
        allowNull: true,
        fields: 'incomit'
    },
    egress: {
        type: Sequelize.FLOAT,
        allowNull: true,
        fields: 'egress'
    },
    id_user:{
      type: Sequelize.INTEGER,
      reference: {
        model: 'user',
        key: 'id_user'
      }
    }
},
{
    tableName:'balance',
    timestamps: true
}
)

module.exports = BalanceModel
