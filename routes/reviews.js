const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST /concerts/:id/reviews 
router.post('/:id/reviews', reviewsCtrl.create);
// DELETE /reviews
router.delete('/reviews/:id', reviewsCtrl.delete);


module.exports = router;