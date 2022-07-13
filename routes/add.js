var express = require('express');
var router = express.Router();

/* Add a new room */
router.get('/', (req, res) => {
  console.log('add');
  res.render('index', { title: 'AP Hotel', message: 'Add room!' })
})

module.exports = router;
