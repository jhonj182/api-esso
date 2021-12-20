const Usuario = require('../models/Usuario');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next )  => {

    // crear objeto de usuario con datos de req.body
    const usuario = new Usuario(req.body);
    const { email } =req.body;
    try {
        Usuario.findOne({email:email}).then(user=>{
            if(user){
                res.json({msg: 'Email already exists'});
            }else{
                usuario.save();
                res.json({ mensaje : 'El cliente se agregó correctamente'}); 
            }
        })
        
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene todos los usuarios */

exports.obtenerusuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene un usuario en especifico por su ID */
exports.obtenerusuario = async (req, res, next) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        res.json(usuario);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualiza un registro por su ID
exports.actualizarusuario = async (req, res, next) => {
    try {
        
        const usuario = await Usuario.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(usuario);
    } catch (error) {
        console.log(error);
        next();
    }
}
// Actualiza un registro por su ID
exports.recargarusuario = async (req, res, next) => {
    try {
        // console.log(req)
        cantidad = (req.body.params.cantidad);
        console.log(cantidad)
        const filter = { _id : req.params.id };
        const update = { saldo:cantidad };
        const usuario = await Usuario.updateOne(filter, update,{new:true});
        console.log('nuevo saldo : ' + usuario.saldo)
        res.json(usuario);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un usuario por su id
exports.eliminarusuario = async(req, res, next) => {
    try {
        await Usuario.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El usuario fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.loginusuario = async (req, res, next) => {
    try {
        console.log(req.query.email);
        console.log(req.query.password);
        const usuario = await  Usuario.find({});
        const usuarioLogin = usuario.filter( usuario => (usuario.email == req.query.email));
        if(usuarioLogin.password == req.query.password){
            console.log(usuarioLogin);
            res.json(usuarioLogin);
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        next();
    }
}