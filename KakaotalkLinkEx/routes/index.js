var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.sendFile(__dirname+'\\kakaolinkTest.html');
})

module.exports = router;
