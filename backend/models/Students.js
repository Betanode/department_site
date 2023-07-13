const mongoose = require('mongoose')

const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rollNo: {
        type: String,
        required: true,
        unique:true
    },
})
module.exports = mongoose.model('students', studentSchema);