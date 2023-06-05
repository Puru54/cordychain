const User = require('./../Models/userModel')
// const nodemailer = require('nodemailer')
// const Email = require('emailjs-com');
const otpGenerator = require("otp-generator");


exports.getAllUser = async (req, res, next) => {
    try{
        const users = await User.find()
        res.status(200).json({data: users, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}


exports.createUser = async (req, res, next) => {
    try {
        
        const otp = otpGenerator.generate(20, { upperCase: false, specialChars: false });

        
        
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            eID:req.body.eID,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            otp:otp // add the generated OTP to the user object
        });

        await user.save();

    
        res.json({ data: user, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


exports.getUser = async (req, res,) => {
    try{
        const user = await User.findById(req.params.id);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.updateUser = async (req, res,) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.deleteUser = async (req, res,) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        
        res.json({data:user, status: 'success'})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

const bcrypt = require('bcryptjs');

exports.updateUserP = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (password) {
      // If a new password is provided, encrypt it before updating
      const hashedPassword = await bcrypt.hash(password, 12);
      req.body.password = hashedPassword;
    }

    const user = await User.findOneAndUpdate({ email: req.params.email }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ data: user, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

  