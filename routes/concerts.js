var express = require('express');
var router = express.Router();
const concertsCtrl = require('../controllers/concerts');

// GET /concerts/
router.get('/', concertsCtrl.index);
// GET /concerts/new
router.get('/new', concertsCtrl.new);


module.exports = router;
