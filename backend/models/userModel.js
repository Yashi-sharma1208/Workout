const mongoose = require('mongoose')

// bcrypt is a hashing function that hash the password in a secured way
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// static signup method
// regular asynchronous function because we are using this keyword
userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password) 
    {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) 
    {
      throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) 
    {
      throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })
    if (exists) 
    {
      throw Error('Email already in use')
    }

    // mypasswordj87w45ns9dn
    // mypasswordn28l5ns9dn9
    // if two passwords are same then it added different string ,therefore resulting hash will be different
    
    // higher no => higher security but it is also longer for users
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ email, password: hash })
  
    return user
}

// static login method
userSchema.statics.login = async function(email, password) 
{

    if (!email || !password) 
    {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })

    if (!user) 
    {
      throw Error('Incorrect email')
    }
  
    // password is plain text
    // user.password is hashed password
    const match = await bcrypt.compare(password, user.password)

    if (!match) 
    {
      throw Error('Incorrect password')
    }
  
    return user
  }


module.exports = mongoose.model('User', userSchema)




