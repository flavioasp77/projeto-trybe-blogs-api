const { userLogin } = require('../services/User');
const { createToken } = require('./middlewares');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const user = await userLogin({ email, password });

  if (user.status) {
    return res.status(400).json({ message: user.message });
  }

  const token = await createToken(email);

  return res.status(200).json({ token });
};
