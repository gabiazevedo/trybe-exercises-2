const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    page_quantity: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
  },
  {
   underscored: true,
   tableName: 'Books',
   timestamps: false,
  });
  return Book;
};

module.exports = Book;

//teste
