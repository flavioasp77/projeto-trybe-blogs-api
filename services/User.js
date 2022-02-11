const { User } = require('../models');
const { Categories } = require('../models');

const createUser = async (newUser) => {
 const userExist = await User.findOne({ where: { email: newUser.email } });
  
 if (userExist) {
   return {
     status: true,
     message: 'User already registered',
   };
 }
 const user = await User.create(newUser);
 return user;
};

const userLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user || user.password !== password) {
    return {
      status: true,
      message: 'Invalid fields',
    };
  }
  
  return user;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return {
      status: true,
      message: 'User does not exist',
    };
  }

  return user;
};

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAllCategories = async () => {
  const allCategories = await Categories.findAll();
  return allCategories;
};

module.exports = {
  createUser,
  userLogin,
  getAllUsers,
  getUserById,
  createCategory,
  getAllCategories,
};