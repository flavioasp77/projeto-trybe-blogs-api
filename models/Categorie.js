module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Categorie', {
   name: DataTypes.STRING,
  },
  {
    timestamps: false,
    // underscored: true,
    tableName: 'Categories',
  });
  return User;
};