const Transaccion = require('../models/Transaccion');

// Cuando se crea un nuevo cliente
exports.nuevatransaccion = async (req, res, next )  => {

    // crear objeto de usuario con datos de req.body
    const transaccion = new Transaccion(req.body);
    try {
        transaccion.save();
        res.json({ mensaje : 'La transaccion  se agregó correctamente'}); 
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene todos los usuarios */

exports.obtenertransacciones = async (req, res, next) => {
    try {
        const transaccion = await Transaccion.find({});
        res.json(transaccion);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene todos las transacciones del usuario */
exports.obtenertransaccionesusuario = async (req, res, next) => {
    try {
        const transacciones = await Transaccion.find();
        const transaccionUsuarios = transacciones.filter( transaccion => transaccion.user_id === req.params.iduser)
        console.log(transaccionUsuarios);
        res.json(transaccionUsuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

