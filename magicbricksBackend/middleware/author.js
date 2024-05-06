const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]; // Bearer Token
//   if (!token) return res.status(401).send('Access denied. No token provided.');

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).send('Invalid token.');
//   }
// };

// app.get('/protected', authenticate, (req, res) => {
//   res.status(200).send('Welcome to the protected route, user ' + req.user.id);
// });
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).send("Token not provided");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).send("Invalid Token");
    req.user = user;
    next();
  });
}
module.exports=authenticateToken