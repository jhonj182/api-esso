const express = require('express');
const Usuario = require('../models/Usuario');
const app = express();

exports.login = async  (req, res) => {
    // here write code
    const { email, password } = req.body.params;
    console.log(req.body.params.email);
    try{
      Usuario.findOne({email:email}).then(user=>{
         if(user){
            if (user.password != password){
               console.log('la clave ingresada es incorrecta')
               res.json({msg: 'La clave ingresada es incorrecta'});
            }else{
               console.log(user)
               res.json(user);
            }
         }else{
            console.log('usuario no existe')
             res.json({ mensaje : 'El usuario no existe'}); 
         }
     })

   }catch(error) {
      console.log(error);
      next();

   }
};