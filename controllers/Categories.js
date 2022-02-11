const categoryServices = require('../services/Categories');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await categoryServices.createCategory(name);

  return res.status(201).json(category);  
};

const getAllCategories = async (_req, res) => {
  const allCategories = await categoryServices.getAllCategories();

  return res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};