const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/Users');
const middlewares = require('./controllers/middlewares');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  controller.createUser);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
