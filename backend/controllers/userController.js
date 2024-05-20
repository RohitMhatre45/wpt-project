const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}


const loginUser = async (req, res) => {
  
  const {email, password} = req.body

  var da = await User.findOne({ email });




 

  
 

  
 
  
  try {
  
    
    const user = await User.login(email, password)


   
    const token = createToken(user._id)
    

    if (da == null) {
      res.status(400).json({error: error.message})
    }
    if (da != null) {
      console.log("here");
      console.log(user.fname);
      const fname = user.fname
      const k = user._id
     
    
      
      
      res.status(200).json({ email,fname:fname, _id: user._id, token });
    }
      

   

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


const signupUser = async (req, res) => {
  const {fname,email, password} = req.body

  try {
    const user = await User.signup(fname,email, password)
    console.log(user);
    console.log("done");
    
    const token = createToken(user._id)
    console.log(token);
    console.log("done1");

    res.status(200).json({email,fname, _id: user._id, token})
    console.log("done2");
  } catch (error) {
    console.log("done3");
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }