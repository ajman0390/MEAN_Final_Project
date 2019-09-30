var express = require('express');
var leaguesRouter = express.Router();
var leaguesController = require('../controllers/leaguesController');
var fs = require('fs');

/* GET Leagues Data. */
// http://localhost:3000/leagues/data
leaguesRouter.get('/data', leaguesController.getLeaguesData);

/* GET League Data. */
// http://localhost:3000/leagues/data/:id
leaguesRouter.get('/data/:id', leaguesController.getLeagueData);

module.exports = leaguesRouter;