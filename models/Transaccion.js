const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transaccionesSchema = new Schema({
    user_id: {
        type: String,
        trim: true,
    },
    tipo: {
        type: String,
        trim: true,
    },
    fecha: {
        type: String,
        trim: true
    },
    monto: {
        type: String,
        trim: true
    },
    vehiculo: {
        type: String,
        trim: true
    },
    puntos_obt: {
        type: String,
        trim: true
    },
    puntos_red: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports  = mongoose.model('Transaccion', transaccionesSchema);
