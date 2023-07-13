const mongoose = require('mongoose')

const { Schema } = mongoose;

const noteSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message :{
        type:String ,
        required : true
    },
})
module.exports = mongoose.model('notes', noteSchema);