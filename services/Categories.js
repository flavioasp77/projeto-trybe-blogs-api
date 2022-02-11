const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAllCategories = async () => {
  const allCategories = await Categories.findAll();
  return allCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
};