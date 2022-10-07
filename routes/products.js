

const {Product,validate} = require('../models/product')
const {Genre} = require('../models/genre')
const express = require("express")
const router = express.Router()

router.get("/",async(req,res)=>{
    const products = await Product.find().sort('name');
    res.send(products)
});

router.post('/', async(req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('invalid genre...')

    
})



