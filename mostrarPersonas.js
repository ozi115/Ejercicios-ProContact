const request  = require('request');
const express = require('express')
const port = 3000;
//const validations = require('./validations');
const index =express();
const crearPersonas = require('./routers/crearPersonas.js')
//const str = require ('./utils/mocks/rfc');
const bodyParser = require('body-parser');
//var rp = require('request-promise');
//var fs = require('fs');

index.use(express.json());


/// middlewares
index.use((req, res, next) => {
    console.log(`${req.url} - $(req.method)`);
    next();
})

index.use(bodyParser.urlencoded({ extended: false }));
index.use(bodyParser.json());

// configuraciones
index.set('view engine', 'ejs')
//route
index.use(crearPersonas);


/*
fs.readFile('./utils/mocks/rfc', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
});
*/


//////
request('https://reclutamiento-14cf7.firebaseio.com/personas.json', function (error,response, body) {
    console.error('error:',error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});


index.post('/prueba',(req,res,next)=>{
    const{nombre, apellido, dni} = req.body;
 
     console.log('Entro',req.body);
    
    
     if(typeof nombre === 'string' && typeof apellido === 'string'){
         if(dni==10){
            res.status(400).send('Error, atributos incorrectos.');
            return;
         } 
     }else{
          res.status(201).send('Datos enviados correctamente');
          return;
     }

    
     res.json({
        code: '201',
    });

    return res.status(500).send('Hubo algun error');
    
 });

/*
var options = {
    method: 'POST',
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
    body: {
        nombre: 'pancho',
        apellido: 'MacMenamin',
        dni: 5252834725
    },
    json: true // Automatically stringifies the body to JSON
};
 
rp(options)
    .then(function (parsedBody) {
        
    })
    .catch(function (err) {
        
    });*/
/////////////


index.listen(port, ()=> console.log(`Hello world app listening on http://localhost:${port}`));
