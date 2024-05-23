const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// id is the part of the payload of the token
const createToken = (_id) => {

  // user will remain logged in for 1 day and then token is expired
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })  
}


// login a user
//  asynchronous code to communicate with database
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try 
  {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } 
  catch (error) 
  {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    // passing the token (big long string)
    res.status(200).json({email, token})
  } 
  catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }