const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Please enter your email'],
        unique:true,
        lowercase:true,
        validator: [validator.isEmail, 'please provide a valid email'],

    },
  
    password:{
        type:String,
        require: [true, 'please enter a password'],

    },
   
   
    

})

adminSchema.pre('save', async function (next) {
    if (!this.isModified('password'))return next()
    this.password = await bcrypt.hash(this.password,12)
    //this.passwordConfirm=undefined
    next()
})

adminSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword,
){
    return await bcrypt.compare(candidatePassword,userPassword)
}


const Admin = mongoose.model('Admin',adminSchema)
module.exports=Admin


