const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes
 */
router.get('/', recipeController.homepage);

// Route for the dummy recipe page
router.get('/recipe', recipeController.recipePage);

module.exports = router;
