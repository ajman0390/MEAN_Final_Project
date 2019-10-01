var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/data', function(req, res, next) {
    try {
        res.end(fs.readFileSync('./data/powers.json'));
    } catch (err) {
        res.end('[]');
    }
    
  });

module.exports = router;