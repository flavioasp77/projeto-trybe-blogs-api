const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;

const createToken = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  const jwtconfig = {
    expiresIn: '15d',
    algorithm: 'HS256',
  };

  delete user.password;

  const token = jwt.sign({ payload: user }, SECRET, jwtconfig);
  res.status(200).json({ token });
};

module.exports = {
  createToken,
};