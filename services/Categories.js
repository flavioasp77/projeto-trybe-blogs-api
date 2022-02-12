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
  const findCategory = await Promise.all(
    categoryIds.map(async (id) => {
      const categoryId = await Categories.findByPk(id);
      console.log(categoryId);
      return categoryId;
    }),
  );
  console.log(categoryIds);
  console.log(findCategory);

  return findCategory.some((id) => id);  
};

module.exports = {
  createCategory,
  getAllCategories,
  findCategoryById,
};