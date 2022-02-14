const { BlogPosts, User, Categories } = require('../models');

const createPost = async ({ title, content, userId }) => {
  const createBlogPost = await BlogPosts.create({ title, content, userId });
  return createBlogPost;
};

const getAllPosts = async () => {
  const allPosts = await BlogPosts.findAll({
    include: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Categories,
        as: 'categories',
        through: { attributes: [] },
      },     
    ],
  });

  return allPosts;
};

const getPostById = async (id) => {
  const postById = await BlogPosts.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Categories,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return postById;
};
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};