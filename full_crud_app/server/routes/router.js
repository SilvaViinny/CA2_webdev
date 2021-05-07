const http = require('http')
const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add Itens
 *  @method GET /add-itens
 */
route.get('/add-item', services.add_item)

/**
 *  @description for update itens
 *  @method GET /update-itens
 */
route.get('/update-item', services.update_item)


// API
route.post('/api/item', controller.create);
route.get('/api/item', controller.find);
route.put('/api/item/:id', controller.update);
route.delete('/api/item/:id', controller.delete);


module.exports = route