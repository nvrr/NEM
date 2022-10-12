const express = require('express')
const app = express();

require('./startup/db')()
require('./startup/routes')(app)
require('./startup/validation')()


const port = process.env.PORT || 3000;
app.listen(port, () =>{console.log('node started at 3000 port');})


