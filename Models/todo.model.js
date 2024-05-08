const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status:{
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
