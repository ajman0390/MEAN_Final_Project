import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../providers/leagues.service';
import { TeamService } from '../providers/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  // Array to hold Leagues Objects
  leagues: Array<string> = [];
  // Array to hold Teams Objects
  teams: Array<string> = [];

  constructor(
    private router: Router, 
    private leagueService: LeagueService, 
    private teamService: TeamService
    ) {}

  ngOnInit() {
   console.log(sessionStorage.getItem("userID"));
    // call getLeagues() method in Leagues Service
    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;
    });

    // call getTeams() method in Teams Service
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });

  }

}
