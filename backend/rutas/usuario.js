const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const usuarioSchema = new eschema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaNacimiento: Date,
    IdUsuario: String,

})

const ModeloUsuario = mongoose.model('usuario', usuarioSchema)
module.exports = router

/* Ruta de Prueba
router.get('/ejemplo', (req, res)=>{
    res.end('ejemplo de ruta')
})*/

router.post('/Registro', (req, res)=>{
    const newUsuario = new ModeloUsuario({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    fechaNacimiento: req.body.fechaNacimiento,
    IdUsuario: req.body.IdUsuario
    }) 
    newUsuario.save(function(err){
        if(!err){
            res.send('Registro con exito')
        }
        else{
            res.send('Error al registrar')
        }
    })
})
