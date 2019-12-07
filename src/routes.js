const express = require('express');
const routes = express.Router();

// Import controllers
const RestaurantController = require('./controllers/RestaurantController');
const MenuController = require('./controllers/MenuController');
const UserSessionController = require('./controllers/UserSessionController');
const RestaurantSessionController = require('./controllers/RestaurantSessionController');
const UserOrderController = require('./controllers/UserOrderController');
const RestaurantOrderController = require('./controllers/RestaurantOrderController');

routes.get('/restaurants', RestaurantController.index);
routes.get('/restaurants/:id', RestaurantController.show);
routes.post('/restaurants', RestaurantController.store);
routes.put('/restaurants/:id', RestaurantController.update);
routes.delete('/restaurants/:id', RestaurantController.destroy);

routes.get('/menu', MenuController.index);
routes.post('/menu', MenuController.store);

//  Rotas para autenticação da Sessão
routes.post('/restaurant/session', RestaurantSessionController.store);
routes.post('/user/session', UserSessionController.store);

routes.post('/user/orders', UserOrderController.store);
routes.get('/user/orders', UserOrderController.index);

routes.get('/restaurant/orders', RestaurantOrderController.index);
routes.put('/restaurant/orders/:id', RestaurantOrderController.update);

module.exports = routes;