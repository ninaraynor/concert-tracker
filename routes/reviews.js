const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST /concerts/:id/reviews (create review for a concert)
router.post('/:id/reviews', reviewsCtrl.create);

module.exports = router;