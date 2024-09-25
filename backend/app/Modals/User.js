const mongoose = require('mongoose');
// Create Schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    created_at:{
        type: Date, 
        default: Date.now()
    },
    updated_at:{
        type: Date, 
        default: Date.now()
    }
});

module.exports = mongoose.model('User',userSchema);