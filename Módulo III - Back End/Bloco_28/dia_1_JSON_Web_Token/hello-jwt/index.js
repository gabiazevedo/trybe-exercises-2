require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
  );

app.use(express.json());
  
app.post('/login', controllers.login);

app.get('/users/me', middlewares.auth, controllers.me);

app.get('/ping', controllers.ping);

app.get('/topSecret',
  middlewares.auth,
  middlewares.admin,
  controllers.topSecret);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
