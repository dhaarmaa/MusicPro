const express = require('express');
const app = express();

//importar conexion MongoDB
const archivoBD = require('./conexion')

app.get('/', (req, res)=>{
    res.end('bienvenidos al servidor de TeenTitans')
})

//config basica
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})