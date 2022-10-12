

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

    const product = new Product({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name:genre.name,
        },
        numberInStock: req.body.numberInStock,
        dialyRentalRate: req.body.dialyRentalRate,
    });

    await product.save()
    res.send(product)
})

router.put('/:id', async(req,res)=>{
    const {error} = validate(re.body);
    if(error) return res.statius(400).send(error.details[0].message)

   const product = await Product.findByIdAndUpdate(
    re.params.id, {title: req.body.name},
    {new: true}
   )

   if(!product) return res.status(400).send('the product with givenid not found.')

   res.send(product)

    
})

router.delete('/:id', async(req,res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if(!movie) return res.status(400).send('the product with givenn id not found.')

    res.send(product)
})

router.get('/:id', async(req,res) => {
    const product = await Product.findById(req.params.id);

    if(!product) return res.status(400).send('product with given id doesnt exist.')

    res.send(product)
})

module.exports = router;





