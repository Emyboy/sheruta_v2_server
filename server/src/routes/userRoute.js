const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/userController');
const userValidation = require('../middlewares/userValidation');
const {check} = require('express-validator');
const { googleLogin } = require('../controllers/userController');
const { validateToken } = userValidation;
const {
  signupUser,
  loginUser,
  getAllUser,
  decodeToken,
  getUserProfile,
  updateUserProfile,
  getUserByEmail,
  activate
} = userController;

userRoute.get('/user/:userid', getUserProfile);
userRoute.get('/users/:token', validateToken, getUserByEmail);
userRoute.get('/users', getAllUser);
userRoute.post('/users/decode', validateToken, decodeToken);
userRoute.post('/signup',signupUser);
userRoute.post('/login', loginUser);

userRoute.put('/users/:userid', updateUserProfile);

userRoute.post('/activate/:userid', activate);

userRoute.post('/login/google', googleLogin);

module.exports = userRoute;
