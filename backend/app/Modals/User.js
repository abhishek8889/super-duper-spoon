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
    profile_image:{
        type:String,
    },
    is_admin:{
        type:Boolean,
        default:false,
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