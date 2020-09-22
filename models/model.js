const mongoose = require('mongoose')
const candidateSchema = new mongoose.Schema({
    name:{type:String,default:""},
    semester:{type:Number,default:0},
    email:{type:String,default:""},
    phone:{type:Number,default:0},
    organization:{type:String, default:""},
    timestamp:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('candidate',candidateSchema)