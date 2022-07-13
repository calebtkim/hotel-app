var express = require('express');
var router = express.Router();

/* display room list */
router.get('/', (req, res) => {
  res.render('index', { title: 'AP Hotel', message: 'List rooms!' })
})

module.exports = router;
