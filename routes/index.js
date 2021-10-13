var express = require('express');
var router = express.Router();

var index_controller = require('../controller/homeController');

router.get('/', index_controller.index);
router.get('/edit', index_controller.edit);
router.post('/edit', index_controller.editUpdate);

module.exports = router;