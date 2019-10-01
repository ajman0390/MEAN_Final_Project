import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../providers/auth.service';
import { TeamService } from './../providers/teams.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // declare elements
  pageTitle = 'Team Profile';
  sub: any;
  teamMembers: Array<string> = [];
  oldTeamData: any = {};
  team: any = {};
  teamID: number = 0;
  teamName: string = '';
  teamLeague: string = '';
  maxTeamMembers: number = 0;
  minMemberAge: number = 0;
  maxMemberAge: number = 0;
  teamGender: string = '';
  managerName: string = '';
  managerPhone: string = '';
  managerEmail: string = '';
  src: string = '';
  mgrEmail: string = '';
  error: boolean = false;
  errMsg: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    if (!(this.authService.getAuth())) {
      this.router.navigate(['/login']);
    }

    this.teamID = this.teamService.getTeamID();
    console.log(this.teamID)

    // set elements values based on GET team data request for a specific team
    this.teamService.getTeamData(this.teamID).subscribe(data => {
      this.team = data;
      this.oldTeamData = data;
      this.teamID = this.team.TeamId;
      this.teamName = this.team.TeamName;
      this.teamLeague = this.team.teamLeague;
      this.maxTeamMembers = this.team.MaxTeamMembers;
      this.minMemberAge = this.team.MinMemberAge;
      this.maxMemberAge = this.team.MaxMemberAge;
      this.teamGender = this.team.TeamGender;
      this.managerName = this.team.ManagerName;
      this.managerPhone = this.team.ManagerPhone;
      this.managerEmail = this.team.ManagerEmail;
      this.teamMembers = this.team.Members;
    });
  }

    // defining the "top"
    @ViewChild('top', { static: false }) top: ElementRef
    // function for the scroll
    goToTop(): void {
      this.top.nativeElement.scrollIntoView({ behavior: 'smooth'})
    }

    // go to Teams page
    goTeams(): void {
      this.router.navigate(['/teams']);
    }

}
