var express = require('express');
var router = express.Router();

/* display room list */
router.get('/', (req, res) => {
  console.log('list');
  res.render('index', { title: 'AP Hotel', message: 'List rooms!' })
})

module.exports = router;
