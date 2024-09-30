const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    // res.send(req.headers['authorization']);
    // return false;
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, 'login-auth-key', (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
};
  
module.exports = authenticateToken;
