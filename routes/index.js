const express = require('express');
const router = express.Router();

// Require controller modules.
const home_controller = require ('../controllers/homeController');

// Home ROUTES

// Get home page

router.get('/', home_controller.index);
router.get('/edit', home_controller.edit);
router.post('/edit', home_controller.editUpdate);

module.exports = router;