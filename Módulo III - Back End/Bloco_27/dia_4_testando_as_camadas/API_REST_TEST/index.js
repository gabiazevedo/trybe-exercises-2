const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.get('/movies', MovieController.getAll);

app.post('/movies', MovieController.create);

app.get('/movies/:id', MovieController.findMovieById);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
