const { BlogPosts } = require('../models');

const createPost = async ({ title, content, userId }) => {
  const createBlogPost = await BlogPosts.create({ title, content, userId });
  return createBlogPost;
};

module.exports = {
  createPost,
};