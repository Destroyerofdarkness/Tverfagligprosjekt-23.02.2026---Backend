const {Schema, model}= require("mongoose");

const userSchema = new Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    passwd:{
        type:String,
        required:true,
        minLength:6
    }
})



const User = model("Users",userSchema)

module.exports = User