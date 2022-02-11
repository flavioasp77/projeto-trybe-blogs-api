const categoryServices = require('../services/Categories');
const postServices = require('../services/BlogPosts');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user;

  const findCategory = await categoryServices.findCategoryById(categoryIds);

  if (findCategory === false) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const post = await postServices.createPost({ title, content, userId });

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};