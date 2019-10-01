import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams: Array<string> = [];
  teamID: number = 0;

  private teamsEndpoint: string = 'http://localhost:3000/teams/data/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials:true
  }; 

  constructor(private http: HttpClient) { }

  // send GET request for all teams
  getTeams(): Observable<any> {
    return this.http.get(this.teamsEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // send GET request for specific teams
  getTeamData(team_Id: number): Observable<any> {
    return this.http.get(`${this.teamsEndpoint}${team_Id}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // Set User ID
  setTeamID(team_Id: number): void {
    this.teamID = team_Id;
  }
  
  // Get User ID
  getTeamID(): number {
    return this.teamID;
  }
}