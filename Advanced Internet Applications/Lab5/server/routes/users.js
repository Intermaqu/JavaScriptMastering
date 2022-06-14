var express = require('express');
var router = express.Router();
const db = require('../database/db.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllChampions', db.getAllChampions)
router.post('/buyChampion', db.buyChampion)

module.exports = router;
