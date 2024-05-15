const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
