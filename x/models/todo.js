var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  username: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String
  }
});

module.exports = {Todo};
