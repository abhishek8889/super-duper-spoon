const User = require('../../Modals/User');
const Utils = require('../../Helpers/Utils');


const registerUser = async(req,res) => {
    const {name ,email , password,phone } = req.body;
    hashPassword = await Utils.securePassword(password,10);
    const user = new User({
        name:name,
        email:email,
        password: hashPassword,
        phone: phone
    });
    const result = await user.save();
    if(result){
        res.status(200).send({"status":true,"data":result});
    }else{
        res.status(400).send({"status":false,"message":"Something went wrong please try again."});
    }
}

module.exports = {
    registerUser
}