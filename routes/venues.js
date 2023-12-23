const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');
	
// GET /venues
router.get('/', venuesCtrl.index);
// GET /venues/new
router.get('/new', venuesCtrl.new);
// GET /venues/:id
router.get('/:id', venuesCtrl.show);
// POST /venues
router.post('/', venuesCtrl.create);

module.exports = router;