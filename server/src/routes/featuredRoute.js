const express = require('express');
const featuredRoute = express.Router();
const featuredController = require('../controllers/featuredController');

const {
    uploadApartment,
    getAllFeatured,
    deletFeatured
} = featuredController;

featuredRoute.get('/featured/all', getAllFeatured);
featuredRoute.post('/featured', uploadApartment);
featuredRoute.delete('/featured/:featured_id', deletFeatured);

module.exports = featuredRoute;
