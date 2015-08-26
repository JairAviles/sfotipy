var express = require('express');
var router = express.Router();

/* GET list artists */
router.get('/', function(req, res, next) {
  var artists = [
  	'Derrick Harriott',
  	'Alton Ellis',
  	'Derrick Morgan'
  ];
  res.render('artists/index', {artists: artists});
});

module.exports = router;