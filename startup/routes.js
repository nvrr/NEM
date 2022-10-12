const express = require("express")
const users = require('../routes/users')
const products = require('../routes/products')
const customers = require('../routes/customers')
const genres = require('../routes/genres')



module.exports = function(app){
  app.use(express.json());

  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/products', products);
  app.use('/api/users', users);
}