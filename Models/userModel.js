

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  eID: {
    type: String,
    required: [true, 'Please provide your employee ID'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
  verified: {
    type: Boolean,
    default: false,
    select: true,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  role:{
    type:String,
    enum: ['user','admin'],
    default:'user',
},



  otp: {
    type: String,
  },

});

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  // Generate OTP
  const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });

  // Assign the generated OTP to the user's 'otp' field
  this.otp = otp;

  this.password = await bcrypt.hash(this.password, 12);
  next();})

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};


const User = mongoose.model('User', userSchema);
module.exports = User;

