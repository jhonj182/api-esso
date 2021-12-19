const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vehiculosSchema = new Schema({
    propietario_id: {
        type: String,
        trim: true,
    },
    placa: {
        type: String,
        trim: true,
    },
    marca: {
        type: String,
        trim: true
    },
    modelo: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Vehiculo', vehiculosSchema);
