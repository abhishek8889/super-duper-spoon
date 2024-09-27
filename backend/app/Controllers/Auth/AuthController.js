const User = require('../../Modals/User');
const Utils = require('../../Helpers/Utils');
const jwt = require('jsonwebtoken');

///////////////////// Register User ///////////////////

const registerUser = async(req,res) => {
    const {name,email,password,phone} = req.body;
    
    hashPassword = await Utils.securePassword(password,10);
    const fileName =  req.file ? req.file.filename : null;
    const user = new User({
        name:name,
        email:email,
        password: hashPassword,
        phone: phone,
        profile_image: fileName
    });
    
    const result = await user.save();

    if(result){
        res.status(200).send({"status":true,"data":result});
    }else{
        res.status(400).send({"status":false,"message":"Something went wrong please try again."});
    }
}


/////////////////////////////// LOGIN USER /////////////////////////////

const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(400).send({"status":false,"data":{'message' :'Your credentials are wrong.'}});
        }
        // console.log(emailExist);
        const passwordMatch = await Utils.comparePassword(password,user.password);
        if(!passwordMatch){
            return res.status(400).send({"status":false,"data":{'message' :'Your credentials are wrong.'}});
        }

        const token = jwt.sign({ userId: user._id }, 'login-auth-key', {
            expiresIn: '1h',
        });

        res.cookie('token', token, {
            httpOnly: true, // Not accessible via JavaScript
            secure: false,  // Disable secure for localhost
            sameSite: 'Lax', // or 'Strict' based on your need
            maxAge: 3600000, // 1 hour
        });
        // res.status(400).send({"status":false,"data":{'message' :'Your credentials are wrong.'}});
        return res.status(200).json({ message:"Logged in successfully"});

    } catch (error) {
        return res.status(500).json({ error: 'Login failed' , 'message' : error.message });
    }
}

module.exports = {
    registerUser,
    loginUser
}