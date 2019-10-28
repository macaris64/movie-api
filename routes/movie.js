var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
      status: 1,
      message: 'movie.js router',
      page: '/'
  });
});

module.exports = router;
