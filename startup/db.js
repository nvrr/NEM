
const mongoose = require('mongoose')

module.exports = function(){
    mongoose.connect("mongodb+srv://nvr:d1Qblb2ggfhXeDme@cluster0.lm5himb.mongodb.net/?retryWrites=true&w=majority")
     .then(()=> console.log("Connected to mongodb books..."))
}

