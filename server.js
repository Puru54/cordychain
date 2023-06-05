const mongoose = require('mongoose')
const app =  require("./app")

const DB="mongodb://localhost:27017/cordychain"

mongoose.connect(DB).then((con) =>{
    console.log(con.connections)
    console.log("DB connect successful")
}).catch(error => console.log(error));

const port = 4002
app.listen(port, ()=>{
    console.log(`App Running on port ${port}..`)
})