var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let random = Math.floor(Math.random()*15)
let round = 1;

const generateRandom = () => {
  random = Math.floor(Math.random()*15)
  round += 1;
}

router.get('/generateRandomNumber', (req, res)=>{  
  res.send({number: random, round: round})
})



setInterval(() => {
  generateRandom()
}, 1000);


module.exports = router;
