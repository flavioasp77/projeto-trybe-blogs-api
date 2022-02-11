const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAllCategories = async () => {
  const allCategories = await Categories.findAll();
  return allCategories;
};

const findCategoryById = async (categoryIds) => {
  const findCategory = await Promise.All(
    categoryIds.map(async (id) => {
      await Categories.findByPk(id);
    }),
  );

  return findCategory.some((id) => id);  
};

module.exports = {
  createCategory,
  getAllCategories,
  findCategoryById,
};