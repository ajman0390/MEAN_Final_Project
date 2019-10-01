var express = require('express');
const teamsController = require('../controllers/teamsController');
var router = express.Router();
var fs = require('fs');

/* GET all users */
// http://localhost:3000/teams/data
router.get('/data', teamsController.getTeamsData); 

/* Get One Teams Data by Id. */
// http://localhost:3000/teams/data/:id
router.get('/data/:id', teamsController.getTeamData);

// GET A SPECIFIC MEMBER DATA ON A SPECIFIC TEAM
// http://localhost:3000/teams/data/:id/members/:memberId
router.get('/data/:id/members/:memberId', teamsController.getTeamMemberData);

module.exports = router;