const { Schema, model } = require("mongoose");

const argon2 = require("argon2");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Skriv inn brukernavnet.."],
    unique: true,
  },
  passwd: {
    type: String,
    required: [true, "Skriv inn passordet.."],
    minLength: [6,"Passordet må være minst 6 tegn.."],
  },
});

userSchema.pre("save", async function() {
    try{
        this.passwd = await argon2.hash(this.passwd);
    }catch(err){
        console.log(err)
    }
  
});

userSchema.statics.register = async(username, passwd, conPass) => {
  if (passwd === conPass) {
    const user = new User({
      name: username,
      passwd: passwd,
    });
    await user.save();
    return user._id;
  }
  throw Error("Gjentatte passordet er ikke likt..");
};

userSchema.statics.login = async(name, passwd)=>{
  const user = await User.findOne({name:name});
  if(user){
    const userPass = await argon2.verify(user.passwd, passwd)
    if(userPass){
      return user._id
    }
    throw Error("Password not correct")
  }
  throw Error("User not Found")
}

const User = model("Users", userSchema);

module.exports = User;
