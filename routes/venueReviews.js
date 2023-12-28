const express = require('express');
const router = express.Router();
const venueReviewsCtrl = require('../controllers/venueReviews');

// POST /concerts/:id/reviews 
router.post('/:id/venueReviews', venueReviewsCtrl.create);


module.exports = router;