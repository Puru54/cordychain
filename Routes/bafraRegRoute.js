const express = require('express')
const bafraControllers = require('./../Controllers/bafraController')
const adminAuthController=require('./../Controllers/adminAuthController')
const router = express.Router()

router.post('/Register', adminAuthController.login)
router
    .route('/')
    .get(bafraControllers.getAllBafra)
    .post(bafraControllers.createBafra)
   

router
    .route('/:id')
    .get(bafraControllers.getBafra)
    .patch(bafraControllers.updateBafra)
    .delete(bafraControllers.deleteBafra)

module.exports=router
