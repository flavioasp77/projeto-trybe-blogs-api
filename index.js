require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/Users');
const categoryController = require('./controllers/Categories');
const postController = require('./controllers/BlogPosts');
const middlewares = require('./controllers/middlewares');
const login = require('./controllers/login');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  userController.createUser);

app.post('/login',
  middlewares.validateLogin,
  middlewares.validateEmail,
  middlewares.validatePassword,
  login); 

app.get('/user',
  middlewares.validateJWT,
  userController.getAllUsers);
  
app.get('/user/:id',
  middlewares.validateJWT,
  userController.getUserById);

app.post('/categories',  
  middlewares.validateJWT,
  middlewares.validateName,
  categoryController.createCategory);

app.get('/categories',
  middlewares.validateJWT,
  categoryController.getAllCategories);
  
app.post('/post',
  middlewares.validateJWT,
  middlewares.validateTitle,
  middlewares.validateContent,
  middlewares.validateCategoryIds,
  postController.createPost);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
