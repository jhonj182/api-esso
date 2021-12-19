const Vehiculo = require('../models/Vehiculo');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next )  => {

    // crear objeto de vehiculo con datos de req.body
    const vehiculo = new Vehiculo(req.body);
    const { placa } =req.body;
    try {
        Vehiculo.findOne({placa:placa}).then(user=>{
            if(user){
                res.json({msg: 'Placa already exists'});
            }else{
                vehiculo.save();
                res.json({ mensaje : 'El vehiculo se agregó correctamente'}); 
            }
        })
        
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene todos los vehiculos */

exports.obtenervehiculos = async (req, res, next) => {
    try {
        const vehiculos = await Vehiculo.find({});
        res.json(vehiculos);
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.obtenervehiculosusuario = async (req, res, next) => {
    try {
        const vehiculos = await  Vehiculo.find();
        const vehiculoUsuarios = vehiculos.filter( vehiculo => vehiculo.propietario_id === req.params.iduser)
        console.log(vehiculoUsuarios);
        res.json(vehiculoUsuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene un vehiculo en especifico por su ID */
exports.obtenervehiculo = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculo.findById(req.params.id);
        res.json(vehiculo);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualiza un registro por su ID
exports.actualizarvehiculo = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculo.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(vehiculo);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un vehiculo por su id
exports.eliminarvehiculo = async(req, res, next) => {
    try {
        await Vehiculo.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El vehiculo fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}