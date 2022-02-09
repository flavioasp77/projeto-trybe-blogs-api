const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;

const createToken = async (email) => {
  const user = await User.findOne({ where: { email } });

  const jwtconfig = {
    expiresIn: '15d',
    algorithm: 'HS256',
  };

  delete user.password;

  const token = jwt.sign({ payload: user }, SECRET, jwtconfig);
  return token;
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const regexEmail = /\S+@\S+\.\S+/;
  const validEmail = regexEmail.test(email);

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!validEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  next();
};

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validToken = jwt.verify(token, SECRET);

  if (!validToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  next();
}; 

module.exports = {
  createToken,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateLogin,
  validateJWT,
};