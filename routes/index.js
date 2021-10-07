const express = require('express');
const router = express.Router();

// Require controller modules.
const home_controller = require ('../controllers/homeController');

// Home ROUTES

// Get home page

router.get('/', home_controller.index);

module.exports = router;