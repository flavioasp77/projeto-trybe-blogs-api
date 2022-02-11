const { User } = require('../models');
const { Category } = require('../models');

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

const getAll = async () => {
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

const createCategory = async (name) => Category.create(name);

module.exports = {
  createUser,
  userLogin,
  getAll,
  getUserById,
  createCategory,
};