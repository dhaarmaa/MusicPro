const express = require('express')
const router = express.Router()

const mongoose = require('../mongoose')
const eschema = mongoose.Schema

const usuarioSchema = new eschema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaNacimiento: Date,

})


