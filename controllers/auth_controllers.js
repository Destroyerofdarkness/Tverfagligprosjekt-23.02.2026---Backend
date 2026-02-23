const User = require("../models/User");
const jwt = require("jsonwebtoken");

const {userErrorHandler} = require("../handlers/errorHandler")

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
    console.log(err)
    const errors = userErrorHandler(err)
    res.status(302).json({ errors });
  }
};

const sign_in_user = async(req,res)=>{
  const {user,passwd} = req.body
  try{
    const userId = await User.login(user,passwd);
    const token = signJwt(userId);
    res.status(201).json({ token });
  }catch(err){
    console.log(err);
    const errors = userErrorHandler(err)
    res.status(302).json({ errors });
  }
}

const verify_jwt = async(req,res)=>{
  const token = req.params.token
  try{
    await jwt.verify(token, process.env.secret, (err, decodedToken)=>{
      if(err){
        console.log(err)
        res.status(400).json({success:false})
      }else{
        console.log(decodedToken);
        res.status(200).json({success:true})
      }
    }
    )
  }catch(err){
    console.log(err);
    res.status(500).json({success:false})
  }
}

module.exports = {
    sign_up_user,
    sign_in_user,
    verify_jwt
}
