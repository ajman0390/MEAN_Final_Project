import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../providers/leagues.service';
import { TeamService } from '../providers/teams.service';
import { AuthService } from './../providers/auth.service';

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
    private teamService: TeamService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    if (!(this.authService.getAuth())) {
      this.router.navigate(['login']);
    }
   
    // call getLeagues() method in Leagues Service
    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;
    });

    // call getTeams() method in Teams Service
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });

  }

  goDetails(teamId: number): void {
    this.router.navigate(['details'], { queryParams: { TeamId: teamId } });
  }

}
