const {Customer,validate} = require('../models/customer')
const express = require('express')
const router = express.Router()


router.get('/', async(re,res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers)
})

router.post('/', async(req,res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const customer = new Customer({
        name: req.body.name,
        phone: reqq.body.phone,
        isGold: req.body.isGold
    });

    await customer.save()
    res.send(customer);
})

router.put('/:id', async(req,res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const customer = await Customer.findByIdAndUpdate(res.params.id,
        {
            name: req.body.name,
            phone: req.body.phon,
            isGold: req.body.isGold
        },
        {new: true}
        )

        if(!customer) return res.status(404).send('the customer with given id was not found')

        res.send(customer);
});

router.delete('/:id', async(req,res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id)

    if(!customer) return res.status(404).send('the customer with given id was not found')

    res.send(customer)
})

router.get('/:id', async(re,res) => {
    const customer = await Customer.findById(req.params.id);

    if(!customer) res.status(404).send('customer with given id doesnt exist..')

    res.send(customer)
})


module.exports = router;





