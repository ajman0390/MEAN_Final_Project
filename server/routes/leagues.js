var express = require('express');
var leaguesRouter = express.Router();
var leaguesController = require('../controllers/leaguesController');
var fs = require('fs');

// leaguesRouter.get('/data', function(req, res, next) {
//     try {
//         res.end(fs.readFileSync('./data/leagues.json'));
//     } catch (err) {
//         res.end('[]');
//     }
    
//   });

// module.exports = router;

/* GET Leagues Data. */
// http://localhost:3000/leagues/data
leaguesRouter.get('/data', leaguesController.getLeaguesData);

module.exports = leaguesRouter;