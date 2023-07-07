const mongoose = require('mongoose');


const schema = mongoose.Schema
const houseSchema = new schema({
    Name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    phone:{
        type: Number,
        required:true,
    },
    rating: {
        type: Number,
        
    },
    availability: {
        type: Boolean,
        default: true,
    },

})
module.exports = connect = mongoose.model('house', houseSchema)
