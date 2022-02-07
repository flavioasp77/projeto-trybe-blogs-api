const Users = require('../models');

const create = async (newUser) => {
  const [user, created] = await Users.findOrCreate({
    where: {
      email: newUser.email,
    },
    default: {
      newUser,
    },
  });

  if (user) {
    return {
      status: true,
      message: 'User already registered',
    };
  }
  
  return created;
};

module.exports = {
  create,
};