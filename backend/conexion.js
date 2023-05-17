const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MusicPro');

const objectbd = mongoose.connection

objectbd.on('connected', ()=>{console.log('Conectado a la base de datos')})
objectbd.on('error', ()=>{console.log('Error en la conexion a la base de datos')})

module.exports = mongoose
