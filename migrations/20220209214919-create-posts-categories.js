'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
        postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'categories',
          key: 'id',
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};