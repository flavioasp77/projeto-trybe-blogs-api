const userService = require('../services/User');

const createUser = async (req, res) => {
  const newUser = req.body;
  const user = await userService.createUser(newUser);

  if (user.status) return res.status(409).json({ message: user.message });
  return res.status(201).json({ token: 'Usuário cadastrado' });
};

const getAll = async (_req, res) => {
  const allUsers = await userService.getAll();
  return res.status(200).json(allUsers);
};

module.exports = {
  createUser,
  getAll,
};