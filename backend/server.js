const express = require('express');
const app = express();

//importar conexion MongoDB
const archivoBD = require('./conexion')

//importacion del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario');

//importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario);

app.get('/', (req, res)=>{
    res.end('bienvenidos al servidor de TeenTitans')
})

//config basica
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})