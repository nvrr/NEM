
const mongoose = require('mongoose')

module.exports = function(){
    mongoose.connect("mongodb+srv://nvr:yB5Cmflh7kOdEP64@mern1.5dsnkhs.mongodb.net/?retryWrites=true&w=majority")
     .then(()=> console.log("Connected to mongodb books..."))
}

//yB5Cmflh7kOdEP64