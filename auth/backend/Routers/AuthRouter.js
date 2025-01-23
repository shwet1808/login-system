const express = require('express');
const { signup, login } = require('../Controllers/AuthControllers');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = express.Router(); // Use express.Router() for clarity

// Routes
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;