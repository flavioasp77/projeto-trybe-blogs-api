const User = require('../services/User');

const create = async (req, res) => {
  const newUser = req.body;
  const user = await User.create(newUser);

  if (user.status) return res.json(user.message);
  return res.json({ message: 'usuario cadastrado' });
};

module.exports = {
  create,
};