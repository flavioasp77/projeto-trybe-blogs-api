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

  if (!email || email === '') {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!validEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  if (!password || password === '') {
    return res.status(400).json({ messate: '"password" is required' });
  }
  next();
};

module.exports = {
  createToken,
  validateDisplayName,
  validateEmail,
  validatePassword,
};