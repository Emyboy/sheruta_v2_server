const propertyRoute = require('express').Router();
const propertyController = require('../controllers/propertyController')
const {
    addNewProperty,
    getAgentsProperty
} = propertyController;

propertyRoute.post('/property', addNewProperty);
propertyRoute.get('/property/:agent_id', getAgentsProperty);


module.exports = propertyRoute;

