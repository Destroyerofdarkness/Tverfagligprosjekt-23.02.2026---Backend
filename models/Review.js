const { Schema, model } = require("mongoose");
const validator = require("validator")
const reviewSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true,
        validate: {
      validator: (value) => {
        return validator.isURL(value, {
          protocols: ['http', 'https', 'ftp'],
          require_tld: true,
          require_protocol: true
        });
      },
      message: 'Must be a valid URL'
    }
    },
    user:{
        type:String,
        required:true
    }
})