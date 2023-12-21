var express = require('express');
var router = express.Router();
const concertsCtrl = require('../controllers/concerts');

// GET /concerts/
router.get('/', concertsCtrl.index);
	


module.exports = router;
