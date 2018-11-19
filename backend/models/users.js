var mongoose = require('mongoose');

var users = new mongoose.Schema({
    
    username: { 
      type: String ,
      required: true
    },
    password: { 
      type: String ,
      required: true
    }
    },
     {
    timestamps: true
});

module.exports = mongoose.model('user', users);