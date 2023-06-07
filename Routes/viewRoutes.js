const express = require('express')
const router=express.Router()
const viewController=require('.././Controllers/viewController')
const authController=require('.././Controllers/authController')
router.get('/',viewController.getHome)
router.get('/about',viewController.getAbout)
router.get('/login',viewController.getLoginForm)

router.get('/signup',viewController.getSignupForm)
router.get('/verifyemail',viewController.getEmail)
router.get('/resetPassword',viewController.getForgotp)
router.get('/otp',viewController.getOtp)
router.get('/prod-reg',authController.protect, viewController.getRegForm)
router.get('/prod-scan',viewController.getScan)
router.get('/admin',authController.protect,viewController.getAdmin)
// router.get('/admin-packages',authController.protect,viewController.getPackages)
router.get('/admin-users',authController.protect,viewController.getUsers)
router.get('/admin-setting',authController.protect,viewController.getAdminSetting)



module.exports=router