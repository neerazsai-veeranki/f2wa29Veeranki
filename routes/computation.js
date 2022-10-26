var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var max = 360
  var x
  console.log(req.query.x)
  if (req.query.x != undefined) {
    x = req.query.x
  } else {
    x = Math.floor(Math.random() * max)
  }

  let result =  Math.sin(x)
  res.render('computation', { x: x, result: result });
});

module.exports = router;
