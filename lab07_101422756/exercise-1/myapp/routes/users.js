var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
});

router.post('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n');
  res.end(String(JSON.stringify(req.body, null, 2)))
  for (let key in req.body) {
    console.log(`${key}: ${req.body[key]}`);
  }
})

router.use(bodyParser.urlencoded({ extended: true }))

module.exports = router;
