const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

module.exports = function(req, res, next) {
  // Header'dan tokenı al
  const token = req.header('x-auth-token');

  // Token yoksa hata döndür
  if (!token) {
    return res.status(401).json({ msg: 'Token yok, yetkilendirme reddedildi' });
  }

  // Tokenı doğrula
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token geçerli değil' });
  }
}; 