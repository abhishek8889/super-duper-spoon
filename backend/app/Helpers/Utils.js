const bcrypt = require('bcrypt');

async function  securePassword(password , saltRounds = 10) {
    if(password == '' || password == undefined){
        console.log(password);
        return false;
    }
    password  = bcrypt.hash(password, saltRounds);
    
    return password;
}



module.exports = {
    securePassword
}