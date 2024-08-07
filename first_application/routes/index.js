var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var places = [
  { name: 'Home', rating: 10 },
  { name: 'Huston', rating: 9 },
  { name: 'Greenville', rating: 5 },
  { name: 'San Diego', rating: 6 },
  { name: 'Atlanta', rating: 5 }
  ];

  // create a name
var myname = "Alyce Cooper";

res.render('index', {
title: 'Favorite Places',
places: places,
myname: myname
});
});

module.exports = router;