const express = require('express');
const bodyParser = require('body-parser');

const authorController = require('./controllers/authorController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/authors', authorController.listAuthors);
app.get('/authors/new', authorController.newAuthor);
app.get('/authors/:id', authorController.showAuthor);
app.post('/authors', authorController.createAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a ports ${PORT}`);
});