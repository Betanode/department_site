const mongoose = require('mongoose')

const { Schema } = mongoose;

const projectSchema = new Schema({
    project: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    PI :{
        type:String ,
        required : true
    },
    coPI :{
        type : String 
    },
    funding :{
        type : String ,
        required : true
    },
    amount: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('projects', projectSchema);