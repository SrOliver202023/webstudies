const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserControllers')

routes.post('/users', UserController.store);