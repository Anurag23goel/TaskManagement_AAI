const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  publishDate: {
    type: Date,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('BookList', bookSchema);


