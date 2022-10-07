
const Joi = require('joi')
const mongoose = require('mongoose');
const {genreSchema} = require('./genre')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required:true,
        minLength:5,
        maxLength:255,
        trim:true
    },
    numberInStock: {
        type: Number,
        require:true,
        min:0,
        max:255
    },
    dialyRentalRate: {
        type:Number,
        require:true,
        min:0,
        max:255
    },
    genre: {
        type: genreSchema,
        require:true,
    }
})


const Product = mongoose.model('Product', productSchema);

function validateProduct(product){
    const schema = Joi.object({
        title:Joi.string().min(5).max(50).required(),
        numberInStock:Joi.number().min(0).required(),
        dialyRentalRate: Joi.number().min(0).required(),
        genreId: Joi.objectId().required()
    })

    return schema.validate(product)
}

exports.Product = Product;
exports.validate = validateProduct;