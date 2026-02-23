const { Schema, model } = require("mongoose");

const argon2 = require("argon2");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  passwd: {
    type: String,
    required: true,
    minLength: 6,
  },
});

userSchema.pre("save", async () => {
  this.passwd = await argon2.hash(this.passwd);
});

userSchema.statics.register = (username, passwd, conPass) => {
  if (passwd === conPass) {
    const user = new User({
      name: username,
      passwd: passwd,
    });
    return user._id;
  }
  throw Error("Gjentatte passordet er ikke likt..");
};

const User = model("Users", userSchema);

module.exports = User;
