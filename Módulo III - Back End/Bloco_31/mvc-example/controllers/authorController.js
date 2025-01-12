const Author = require('../models/Author');

const listAuthors = async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).render('authors/index', { authors });
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  return res.status(200).render('authors/show', { author });
};

const newAuthor = (_req, res) => {
  return res.render('authors/new', { message: null });
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status('authors/new', { message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);
  return res.redirect('authors');
}

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
};
