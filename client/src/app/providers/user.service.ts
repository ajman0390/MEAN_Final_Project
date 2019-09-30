import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  login(userName: string, userPassword: string) {
    return this.http.post(`${this.usersEndpoint}login`, {user_name : userName, password : userPassword}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  register(userName: string, userEmail: string, userPassword: string) {
    return this.http.post(`${this.usersEndpoint}register`, {user_name : userName, email : userEmail, password : userPassword}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.usersEndpoint}${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  getUsers() {
    return this.http.get(this.usersEndpoint, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  updateUser(userId: number, userEmail: string) {
    return this.http.put(`${this.usersEndpoint}${userId}`, {email : userEmail}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  getUser(userId: number) {
    return this.http.get(`${this.usersEndpoint}${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  
}
