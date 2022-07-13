var express = require('express');
var router = express.Router();

/* Add a new room */
router.get('/', function(req, res, next) {
  res.render('add', { title: 'Add new room' });
  res.send('Create completed.');
});

module.exports = router;
