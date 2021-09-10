const userModel = require("/models/userModel");
const error = require("/common/error");
const exception = require("/common/exception");

const getAllServices = async ({ query }) => {
  const usuarios = await userModel.find({ query: query });
  return usuarios;
};

module.export = { getAllServices };
