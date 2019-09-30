var JSONService = require('../services/JSONService');

var Controller = {};

// GET: http://localhost:3000/leagues/data
Controller.getLeaguesData = (req, res) =>
{
    JSONService.readLeaguesFile(res)
};

// GET: http://localhost:3000/leagues/data/:id
Controller.getLeagueData = (req, res) =>
{
    let id = req.params.id;

    JSONService.readTeamsFile(res)

    data = JSON.parse(data);
    console.log(data)

    let match = data.filter(t => t.League == id);

        if (match == null) {
            res.status(404).send("Not Found");
            return;
        }

        res.end(JSON.stringify(match));
};

module.exports = Controller;