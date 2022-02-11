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

const getUserById = async (req, res) => {
  const { id } = req.params;  
  const user = await userService.getUserById(id);

  if (user.status) return res.status(404).json({ message: user.message });
  
  return res.status(200).json(user);
};

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await userService.createCategory(name);

  return res.status(201).json(category);  
};

module.exports = {
  createUser,
  getAll,
  getUserById,
  createCategory,
};