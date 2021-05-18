const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('crearPersonas')
})

router.post('/', (req, res) => {
    var Nombre = req.body.Nombre;
    var Apellido = req.body.Apellido; 
    var DNI = req.body.DNI;
    
    User.create({
        Nombre: Nombre,
        Apellido: Apellido,
        DNI: DNI,
      
    })
})

module.exports = router;