const propertyRoute = require('express').Router();
const propertyController = require('../controllers/propertyController')
const {
    addNewProperty
} = propertyController;

propertyRoute.post('/property', addNewProperty);


module.exports = propertyRoute;

