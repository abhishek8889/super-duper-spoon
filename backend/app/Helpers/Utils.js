const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function  securePassword(password , saltRounds = 10) {
    if(password == '' || password == undefined){
        console.log(password);
        return false;
    }
    password  = bcrypt.hash(password, saltRounds);
    
    return password;
}

async function comparePassword(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
}


module.exports = {
    securePassword ,
    comparePassword
}