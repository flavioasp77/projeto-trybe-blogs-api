const { User } = require('../models');

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

module.exports = {
  createUser,
};