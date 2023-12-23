const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');
	
// GET /venues
router.get('/', venuesCtrl.index);

module.exports = router;