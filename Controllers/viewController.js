
const path = require ('path')

exports.getLoginForm = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','SignIn.html'))
}
exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','index.html'))
}
exports.getAbout = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','about.html'))
}

exports.getSignupForm = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','signup.html'))
}
exports.getEmail = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','1stOtp.html'))
}

exports.getForgotp = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','resetPassword.html'))
}
exports.getOtp = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','otp.html'))
}

exports.getRegForm = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','prod_reg.html'))
}

exports.getScan = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','scan.html'))
}

exports.getAdmin = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','dashedboard.html'))
}

// exports.getPackages = (req, res) => {
//     res.sendFile(path.join(__dirname,'../','Views','packages.html'))
// }

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','user.html'))
}

exports.getAdminSetting = (req, res) => {
    res.sendFile(path.join(__dirname,'../','Views','setting.html'))
}