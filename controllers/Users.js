const User = require('../services/User');

const createUser = async (req, res) => {
  const newUser = req.body;
  const user = await User.createUser(newUser);

  if (user.status) res.status(409).json({ message: user.message });
  return res.status(201).json({ token: 'Usuário cadastrado' });
};

const getAll = async (_req, res) => {
  const allUsers = await User.getAll();
  return res.status(200).json(allUsers);
};

module.exports = {
  createUser,
  getAll,
};