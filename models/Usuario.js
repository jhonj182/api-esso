const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    apellidos: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    documento: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    tipo: {
        type: String,
        trim: true
    },
    saldo: {
        type: String,
        trim: true
    },
    puntos: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports  = mongoose.model('Usuario', usuariosSchema);
