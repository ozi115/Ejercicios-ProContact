const express = require('express')
const app = express()
const port = 3000

const rfcApi = require('./routers/rfc.js');

const {
    logErrors,
    wrapErrors,
    errorHandler
  } = require('./utils/mocks/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/mocks/middleware/notFoundHandler')

//bodyparser
app.use(express.json());

//routes
rfcApi(app);

//
app.use(notFoundHandler);

//errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Example app at http://localhost:${port}`)
})
