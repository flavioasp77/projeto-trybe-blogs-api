const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/Users');
const { createToken } = require('./controllers/middlewares');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user',
  controller.createUser,
  createToken);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
