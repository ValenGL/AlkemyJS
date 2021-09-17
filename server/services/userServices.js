const userModel = require("../models/userModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAllServices = async () => {
  // const where={}
  // if(user_name){
  //   where.user_name= user_name;
  // }
  const users = await userModel.findAll({ atributes: ["user_name"] });
  return users;
};

const getById = async (id) => {
  console.log("getById -id: " + id);
  const usuario = await userModel.findByPk(id);
  if (!usuario) {
    throw new error.AppError(exceptions.exceptionType.productos.notFound);
  }

  console.log("user return :" + usuario);
  return usuario;
};

const create = async (data) => {
  const { user_name, password, email } = data;
  const usuario = await userModel.create({
    user_name,
    password,
    email,
  });
  return usuario;
};

module.exports = {
  getById,
  getAllServices,
  create,
};
