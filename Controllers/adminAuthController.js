
const User = require('./../Models/adminModel')
const AppError = require('./../utils/appError')
var util=			require('util');

const jwt= require('jsonwebtoken')
// const { default: isEmail } = require('validator/lib/isEmail')

const signToken = (id) => {
    return jwt.sign({id}, "purushotam-adhikari-from-second-year-blockchain-hello-everybody",{

    expiresIn:"90d",
})
    
}
const createSentToken = (user, statusCode,res) => {
    const token = signToken(user._id)
    const cookieOptions = {
        expires: new Date(
            Date.now() + "90"*24*60*1000,
        ),
        httpOnly:true
    }
    res.cookie('jwt',token,cookieOptions)
    res.status(statusCode).json({
        status:"success",
        token,
        data:{
            user
        }
    })
}
exports.signup = async (req, res,next) => {
   
   try{ const newUser = await User.create(req.body)
    
    createSentToken(newUser,201,res)
   }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

exports.login = async (req, res, next) =>{
    try{
        console.log(req.headers)
        const {email, password} = req.body
        if (!email || !password){
            return next (new AppError ("please provide an email and password",400))
        }
        const user = await User.findOne({email}).select('+password')


        if (!user || !(await user.correctPassword(password, user.password))){
            return next(new AppError('Incorrect email or password',401))
        }
        
        createSentToken(user,201,res)

    } catch(err){
        res.status(500).json({error: err.message});
    }

}

exports.logout = (req, res)=>{
    res.cookie('token', '',{
        expires: new Date(Date.now()+10*1000),
        httpOnly:true,
    })
    res.status(200).json({status:'success'})
}

exports.protect = async(req,res,next)=>{
    try{
        //1) getting token and check of its there
        let token 
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ){
            token = req.headers.authorization.split(' ')[1]
            
        }else if(req.cookies.jwt){
            token = req.cookies.jwt

        }
        if(!token){
            return next(
                new AppError('You are not logged in! Please log in to get access.', 401),
            )
        }


        // 2) Verificatin token
        const decoded = await util.promisify(jwt.verify)(token, process.env.JWT_SECRET)
        console.log(decoded)


        // 3) check if user still exits
        const freshUser = await User.findById(decoded.id)
        if(!freshUser){
            return next(
                new AppError('the user belonging to this token no longer exist',401)
            )
        }
        //Grant access to protected route
        req.user =freshUser
        next()


    }catch(err){
        res.status(500).json({error:err.message})
    }
}
