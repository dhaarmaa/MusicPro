const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.end('bienvenidos al servidor de teentitans')
})

//config basica
app.listen(5000, function(){
    console.log('el servidor esta corriendo correctamente')
})