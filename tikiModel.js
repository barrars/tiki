const mongoose = require('mongoose')
const logger = require('./logger')
const Drinks = new mongoose.Schema({
  name: String,
  ingredient: String,
  category: String,
  page: String

})
Drinks.index({ name: 1 })
Drinks.index({ ingredient: 1 })
Drinks.index({ category: 1 })
Drinks.index({ page: 1 })

module.exports = mongoose.model('Drinks', Drinks)
