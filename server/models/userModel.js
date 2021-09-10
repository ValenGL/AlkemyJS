const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");

const UserModel = sequelizeConnection.define(
  "User",
  {
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      fields: "email",
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      fields: "password",
    },
    createdAt: {
      type: Sequelize.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: "updated_at",
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = UserModel;
