var express = require('express');
var router = express.Router();

/* Add a new room */
router.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

module.exports = router;
