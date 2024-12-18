const jwt = require('jsonwebtoken');

const makeToken = async (user) => {
    const token = jwt.sign({email : user.email}, "secret", {expiresIn: "1h"});  
    return token;
}

const verifyToken = async (token) => {  
    const user = jwt.verify(token, "secret");
    return user;
}

module.exports = {makeToken, verifyToken}
