const mongoose = require('mongoose')

const bafraSchema = new mongoose.Schema({
    name1: {
        type: String,
        require: [true, 'please enter name'],

    },
   
    bafraId1: {
        type: String,
        require: [true, 'please enter bafra id'],

    },
})

const Bafra = mongoose.model('Bafra',bafraSchema)
module.exports=Bafra


