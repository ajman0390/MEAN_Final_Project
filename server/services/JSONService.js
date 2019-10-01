const fs = require('fs');
const dataPath = './data/';

var Service = {};

// Read Leagues JSON File
Service.readLeaguesFile = (res) =>
{
    res.end(fs.readFileSync(dataPath + 'leagues.json'));
};

// Read Teams JSON File
Service.readTeamsFile = (res) =>
{   
    return fs.readFileSync(dataPath + 'teams.json');
};

module.exports = Service;