const User = require('../services/User');

const createUser = async (req, res) => {
  const newUser = req.body;
  const user = await User.createUser(newUser);

  if (user.status) res.status(409).json({ message: user.message });
  return res.status(201).json({ token: 'Usuário cadastrado' });
};

module.exports = {
  createUser,
};