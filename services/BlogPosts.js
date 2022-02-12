const { BlogPosts, User, Categories } = require('../models');

const createPost = async ({ title, content, userId }) => {
  const createBlogPost = await BlogPosts.create({ title, content, userId });
  return createBlogPost;
};

const getAllPosts = async () => {
  const allPosts = await BlogPosts.findAll({
    includes: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Categories,
        as: 'categories',
      },
    ],
  });

  return allPosts;
};

module.exports = {
  createPost,
  getAllPosts,
};