var express = require('express');
var router = express.Router();
const concertsCtrl = require('../controllers/concerts');
const reviewsCtrl = require('../controllers/reviews');

// GET /concerts/
router.get('/', concertsCtrl.index);
// GET /concerts/new
router.get('/new', concertsCtrl.new);
// GET /concerts/:id
router.get('/:id', concertsCtrl.show);
// POST /concerts
router.post('/', concertsCtrl.create);
// POST /concerts/:id/reviews (create review for a concert)
router.post('/:id/reviews', reviewsCtrl.create);


module.exports = router;
