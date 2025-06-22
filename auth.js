// middleware/auth.js
const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '123456') {
    return res.status(403).json({ message: 'Forbidden - Invalid API Key' });
  }
  next();
};

module.exports = auth;

