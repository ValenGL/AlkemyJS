const userService = require('/services/userSevices');
const exceptions = require('common/exceptions');
const error = require('/common/error');

const getAll = async (req,res)=> {
    const query = req.query;
    if (!req.query){
        throw new.error.AppError (exceptions.exceptionsType.presupuesto.notFound,"se requiere ID");
    }
    const usuario = await userService.getAllServices(query);
    return usuario;
}

module.exports = {getAll};