const propertyRoute = require('express').Router();
const propertyController = require('../controllers/propertyController')
const {
    addNewProperty,
    getAgentsProperty,
    getSingleProperty,
    deleteApartment
} = propertyController;
const {verifyAuthHeader} = require('../middlewares/userValidation')

propertyRoute.post('/property', verifyAuthHeader, addNewProperty);
propertyRoute.get('/property/:agent_id', getAgentsProperty);
propertyRoute.get('/property/:property_id/:agent_id', getSingleProperty);
propertyRoute.delete('/property/:property_id', deleteApartment);


module.exports = propertyRoute;

