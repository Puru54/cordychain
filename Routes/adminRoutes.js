const express = require('express')
const userControllers = require('./../Controllers/adminController')
const adminAuthController = require('./../Controllers/adminAuthController')
const router = express.Router()


router.post('/ASignup', adminAuthController.signup)
router.post('/Alogin', adminAuthController.login)

router
    .route('/')
    .get(userControllers.getAllAdmin)
    .post(userControllers.createAdmin)
   

router
    .route('/:id')
    .get(userControllers.getAdmin)
    .patch(userControllers.updateAdmin)
    .delete(userControllers.deleteAdmin)

module.exports=router
