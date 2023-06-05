const express = require("express")
const path=require('path')

const app = express()
const userRouter = require('./Routes/userRoutes')
const adminRouter = require('./Routes/adminRoutes')
const bafraRoute = require('./Routes/bafraRegRoute')
const viewRouter = require('./Routes/viewRoutes')


const cookieParser=require('cookie-parser')
app.use(cookieParser())
app.use(express.json())


app.use('/', viewRouter)
app.use(express.static(path.join(__dirname,'Views')))
app.use('/api/v1/users',userRouter)
app.use('/api/v1/admin',adminRouter)
app.use('/api/v1/bafra', bafraRoute)
module.exports = app


