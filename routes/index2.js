const express = require('express');
const router = express.Router();
const usuarioControler = require('../controllers/usuarioControllers');
const vehiculoControler = require('../controllers/vehiculoControllers');

module.exports = function() {
    // Agrega nuevos usuarios via POST
    router.post('/usuarios', 
        usuarioControler.nuevoCliente
    );

    // Obtiene todos los registros de usuarios en la BD
    router.get('/usuarios',
        usuarioControler.obtenerusuarios
    );
    // Obtiene un usuario en especifico (ID)
    router.get('/usuarios/:id',
        usuarioControler.obtenerusuario
    )

    // Actualizar un registro con un ID especifico
    router.put('/usuarios/:id',
        usuarioControler.actualizarusuario
    );

    // Elimina un usuario por su ID
    router.delete('/usuarios/:id',
        usuarioControler.eliminarusuario
    );

    // Agrega nuevos vehiculos via POST
    router.post('/vehiculos', 
        vehiculoControler.nuevoCliente
    );

    // Obtiene todos los registros de vehiculos en la BD
    router.get('/vehiculos',
        vehiculoControler.obtenervehiculos
    );
    router.get('/vehiculos-usuarios/:iduser',
        vehiculoControler.obtenervehiculosusuario
    );
    // Obtiene un vehiculo en especifico (ID)
    router.get('/vehiculos/:id',
        vehiculoControler.obtenervehiculo
    )

    // Actualizar un registro con un ID especifico
    router.put('/vehiculos/:id',
        vehiculoControler.actualizarvehiculo
    );

    // Elimina un vehiculo por su ID
    router.delete('/vehiculos/:id',
        vehiculoControler.eliminarvehiculo
    );
    

    return router;
}