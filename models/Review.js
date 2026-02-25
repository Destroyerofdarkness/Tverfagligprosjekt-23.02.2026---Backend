const { Schema, model } = require("mongoose");
const validator = require("validator")
const reviewSchema = new Schema({
    title:{
        type:String,
        required:[true, "Skriv inn en tittel.."],
        unique:true
    },
    content:{
        type:String,
        required:[true,"Skriv inn en beskrivelse"],
        minLength: [100, "Beskrivelsen må være minst 100 tegn.."]
    },
    link:{
        type:String,
        required:[true, "Skriv inn en lenke.."],
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
        required:[true, "User must be provided.."]
    },
    img:{
      type:String,
        required:[true, "Skriv inn bildelenke.."],
         validate: {
      validator: (value) => {
        return validator.isURL(value, {
          protocols: ['http', 'https', 'ftp'],
          require_protocol: true
        });
      },
      message: 'Lenken må ha en gyldig URL..'
    }
    }
});

reviewSchema.statics.publish =async(title,content,link,user,img)=>{
 const newReview= new Review({
    title:title,
    content:content,
    link:link,
    user:user,
    img:img
  })
  await newReview.save();
}

const Review = model("Reviews", reviewSchema)

module.exports = Review