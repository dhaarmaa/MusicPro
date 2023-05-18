const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const usuarioSchema = new eschema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  fechaNac: Date,
  idUsuario: String,
});

const Modelousuario = mongoose.model('usuarios', usuarioSchema);


//ruta de ejemplo
// router.get('/ejemplo', (req, res) => {
//   res.end('saludos carga ruta ejemplo');
// });

router.post('/register', (req, res)=>{
  const nuevoUsuario = new Modelousuario({
    nombre: req.body.nombre,
    apellido : req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    fechaNac: req.body.fechaNac,
    idusuario: req.body.idUsuario,

  })

  nuevoUsuario.save((err) =>{
    if(!err){
      res.send('usuario agregado correctmente')
    }else{
      res.send(err)
    }
  })
})

module.exports = router;


