const boom = require('@hapi/boom');

function notFoundHandler(req,res){ 

    const {output} =  Boom.notFound('pagina no encontrada');
  
    res.status(output.statusCode);
    res.json(output.payload);
  
  }

module.exports = notFoundHandler;
