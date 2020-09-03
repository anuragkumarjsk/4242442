const mongoose = require('mongoose')
const candidateSchema = new mongoose.Schema({
    name:{type:String,default:""},
    gender:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:String,default:""},
    organizaton:{type:String,default:""},
    timestamp:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('candidate',candidateSchema)