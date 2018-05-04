var mongoose = require('mongoose');
var validator = require('validator');
var Feedback = mongoose.model('feedback', {
  email: {
    type: String,
    required: true,
    unique:true,
    validate: {
      validator: value.isEmail,
      message: values+' is not a valid email'
    }
  },
  username: {
    type: String,
    required: true
  },
  firstname:{
    type: String,
    required: true
  },
  lastname:{
    type:String,
    required: true
  },
  branch:{
    type:String,
    required: true
  },
  feedback:{
    type:String,
    required: true
  }
});

module.exports = {Feedback};
