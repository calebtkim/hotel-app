var express = require('express');
var router = express.Router();

/* display room list */
router.get('/', function(req, res, next) {
    console.log('list rooms');
});

module.exports = router;
