const express = require('express')
const userControllers = require('./../Controllers/userController')
const authcontrollers=require('./../Controllers/authController')
const router = express.Router()

router.post('/Signup', authcontrollers.signup)
router.post('/login', authcontrollers.login)
router.post('/logout',authcontrollers.logout)



router
    .route('/')
    .get(userControllers.getAllUser)
    .post(userControllers.createUser)
    
   

router
    .route('/:id')
    // .post('/sendOTP', authcontrollers.protect, userControllers.sendOTP)
    .get(userControllers.getUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser)

router.route('/email/:email')
    .patch(userControllers.updateUserP);

module.exports=router
