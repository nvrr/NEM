const Joi = require('joi');
const { join } = require('lodash');
const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
        minLength:5,
        maxLength:50
    },
    phone: {
        type:String,
        required: true,
        minLength:5,
        maxLength:50
    },
    isGold: {
        type: Boolean,
        default: false
    }
})

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: join.boolean()
    })

    return schema.validate(customer)
}


exports.Customer = Customer;
exports.validate = validateCustomer;


