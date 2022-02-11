const userService = require('../services/User');

const createUser = async (req, res) => {
  const newUser = req.body;
  const user = await userService.createUser(newUser);

  if (user.status) return res.status(409).json({ message: user.message });
  return res.status(201).json({ token: 'Usuário cadastrado' });
};

const getAllUsers = async (_req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;  
  const user = await userService.getUserById(id);

  if (user.status) return res.status(404).json({ message: user.message });
  
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};