const express = require('express');
const router = express.Router();
const { saveCoordinates } = require('../Controllers/CoordinateController');

// POST route to receive coordinates
router.post('/coordinates', saveCoordinates);

module.exports = router;
