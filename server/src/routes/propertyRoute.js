const propertyRoute = require('express').Router();
const propertyController = require('../controllers/propertyController')
const {
    addNewProperty,
    getAgentsProperty,
    getSingleProperty,
    deleteApartment
} = propertyController;

propertyRoute.post('/property', addNewProperty);
propertyRoute.get('/property/:agent_id', getAgentsProperty);
propertyRoute.get('/property/:property_id/:agent_id', getSingleProperty);
propertyRoute.delete('/property/:property_id', deleteApartment);


module.exports = propertyRoute;

