const userServices = require('../services/userServices');
const exceptions = require('../common/exceptions');
const error= require('../common/error');

const getAll = async (req,res) => {
  // const query = req.query;
  // console.log("get all controller -query"+ JSON.stringify(query));
  // if (!req.query){
  //   throw new error.AppError (exceptions.exceptionsType.prosupuesto.notFound,"se require id");
  // }
  const usario = await userServices.getAllServices();
  res.status(200).json(usario);
}

const getById = async (req,res)=>{
  const params = req.params
  console.log("getById controller - params : "+JSON.stringify(params))
  const id = params.id
  //llamar al servicio de usuarios
  const usuarios = await userServices.getById(id)
  res.status(200).json(usuarios)
}
module.exports ={
  getAll,
  getById,
};
/*
db id_user, user, username, password,
montoActual, fecha y (tipo = egreso,ingreso)
*/
