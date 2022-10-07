
const Joi = require('joi');
const joi = require('joi')
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requires: true,
        minLength:4,
        maxLength:255,
        trim:true
    },
    email: {
        type:String,
        require:true,
        unique:true,
        minLength:5,
        maxLength:255
    },
    password:{
        type: String,
        require: true,
        minLength:5,
        maxLength:1024,
    }
})

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(4).max(50).reuires(),
        email:Joi.string().min().max(255).required().email,
        password:Joi.string().min(5).max(255).required()
    });

    return schema.validate(user)
}

exports.User = User;
exports.validate = validateUser;


