var mongoose = require('mongoose');

var adminstory = new mongoose.Schema({
    
    title: { 
      type: String ,
      required: true
    },
    content: { 
      type: String ,
      required: true
    },
category:{
  type:String,
  required:true
},
    
    description: { 
      type: String ,
      required: true
    }
    
    },
     {
    timestamps: true
});

module.exports = mongoose.model('adminstory', adminstory);