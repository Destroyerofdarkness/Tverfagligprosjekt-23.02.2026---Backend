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
      message: 'Lenken må ha en gyldig URL..'
    }
    },
    user:{
        type:String,
        required:true
    }
});

reviewSchema.statics.publish =async(title,content,link,user)=>{
 const newReview= new Review({
    title:title,
    content:content,
    link:link,
    user:user
  })
  await newReview.save();
}

const Review = model("Reviews", reviewSchema)

module.exports = Review