var express = require('express');
var router = express.Router();
const concertsCtrl = require('../controllers/concerts');

// GET /concerts/
router.get('/', concertsCtrl.index);
// GET /concerts/new
router.get('/new', concertsCtrl.new);
// GET /concerts/:id

// POST /concerts
router.post('/', concertsCtrl.create);


module.exports = router;
