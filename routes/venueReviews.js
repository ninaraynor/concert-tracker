const express = require('express');
const router = express.Router();
const venueReviewsCtrl = require('../controllers/venueReviews');

// POST /concerts/:id/venueReviews 
router.post('/:id/venueReviews', venueReviewsCtrl.create);
// DELETE /reviews
router.delete('/venueReviews/:id', venueReviewsCtrl.delete);


module.exports = router;