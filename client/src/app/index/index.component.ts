import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../providers/leagues.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // Array to hold Leagues Objects
  leagues: Array<string> = [];

  constructor(private router: Router, private leagueService: LeagueService) {}

  ngOnInit() {
    // call getLeagues() method in Leagues Service
    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }
  
  goLogin(): void {
    this.router.navigate(['login']);
  }

}