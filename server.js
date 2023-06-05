const mongoose = require('mongoose')
const app =  require("./app")

const DB="mongodb+srv://purugcit79:WdB2em0ARNdsXlR1@cluster0.wrp82pk.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB).then((con) =>{
    console.log(con.connections)
    console.log("DB connect successful")
}).catch(error => console.log(error));

// const express = require('express');
// const mime = require('mime');
// const app = express();

// app.get('./Views/CSS/try.css', (req, res) => {
//   res.setHeader('Content-Type', mime.getType('css'));
//   // Rest of your code to send the CSS file
// });


const port = 4002
app.listen(port, ()=>{
    console.log(`App Running on port ${port}..`)
})