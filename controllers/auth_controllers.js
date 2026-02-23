const User = require("../models/User");
const jwt = require("jsonwebtoken");

const maxValidAge = 24 * 60 * 60;

const signJwt = (id) => {
  return jwt.sign({ id }, process.env.secret, {
    expiresIn: maxValidAge,
  });
};

const sign_up_user = async (req, res) => {
  const { user, passwd, conPass } = req.body;
  try {
    const userId = await User.register(user, passwd, conPass);
    const token = signJwt(userId);
    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    res.status(302).json({ err });
  }
};

module.exports = {
    sign_up_user
}
