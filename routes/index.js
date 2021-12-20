const express = require('express');
const router = express.Router();
const usuarioControler = require('../controllers/usuarioControllers');
const vehiculoControler = require('../controllers/vehiculoControllers');
const transaccionControllers = require('../controllers/transaccionControllers');
const login = require('../controllers/login');

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

    router.put('/recargar-usuarios/:id',
        usuarioControler.recargarusuario
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

    // Agrega nuevas transacciones via POST
    router.post('/transacciones', 
        transaccionControllers.nuevatransaccion
    );

    // Obtiene todos los registros de transacciones en la BD
    router.get('/transacciones',
    transaccionControllers.obtenertransacciones
    );

    router.get('/transacciones-usuarios/:iduser',
    transaccionControllers.obtenertransaccionesusuario
    );

    router.post('/login',
    login.login
    );


    return router;
}