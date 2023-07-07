const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema
const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    age: Number,

    password: {
        type: String,
        required: true
    }


});


module.exports = connect = mongoose.model('user', userSchema)
