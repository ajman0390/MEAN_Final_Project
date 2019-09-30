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
router.get('/data/:id/members/:memberId', teamsController.getTeamMemberData);
// router.get("/data/:id/members/:memberId", function (req, res) {
//   let teamId = req.params.id;
//   let memberId = req.params.memberId;
//   console.log("Received a GET request for member " + memberId + " on team " + teamId);

//   console.log("Here it is")

//   let data = fs.readFileSync("./data/teams.json", "utf8"); 
//   data = JSON.parse(data);
//   console.log(data)
//   console.log("Here I is")

//   // find the team member on the team
//   let team = getMatchingTeamById(teamId, data)
//   console.log(team)
//   if (team == null) {
//       console.log("Team Not Found");
//       response.statusCode = 404;
//       response.end();
//   }

//   // find existing member on the team
//   let match = team.Members.find(m => m.MemberId == memberId);
//   if (match == null) {
//       console.log("Member Not Found");
//       response.statusCode = 404;
//       response.end();
//   }

//   //console.log("Returned data is: ");
//   //console.log("Member: " + memberId + " Name: " + match.memberName);
//   res.end(JSON.stringify(match));
// })

// ------ Search helpers ------------------

function getMatchingTeamById(teamId, data)
{
  let match = data.find(t => t.TeamId == teamId);
  return match;
}

module.exports = router;