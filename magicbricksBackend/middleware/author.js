// const authenticateJWT = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access Denied' });
  
//     try {
//         const verified = jwt.verify(token, JWT_SECRET);
//         req.user = verified; // Attach user information to request
//         next();
//     } catch (err) {
//         res.status(400).json({ message: 'Invalid Token' });
//     }
//   };
//   module.exports=authenticateJWT


  const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });
  
    try {
      const verified = jwt.verify(token.split(' ')[1], JWT_SECRET); // Ensure Bearer prefix is removed
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid Token' });
    }
  };
  
  module.exports = authenticateJWT;
  