var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('create');
  res.render('index', { title: 'AP Hotel', message: 'Create room!' })
})

module.exports = router;
