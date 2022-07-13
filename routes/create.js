var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('create');
  res.render('index', { title: 'AP Hotel', message: 'Create room!' });
  res.send('Create completed.');
})

module.exports = router;
