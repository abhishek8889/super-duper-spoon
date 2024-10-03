const User = require('../../Modals/User');

const UserList = async (req,res) => {
    try{
        const users = await User.find({is_admin : false}).select('-password').exec();
        return res.status(200).json(users);
    }catch(error){
        return res.status(400).json({status:false,message:error.message});
    }
}

module.exports = {
    UserList
}