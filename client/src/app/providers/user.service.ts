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

  // POST Login Observable
  login(userName: string, userPassword: string) {
    return this.http.post(`${this.usersEndpoint}login`, {user_name : userName, password : userPassword}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // POST Register Observable
  register(userName: string, userEmail: string, userPassword: string) {
    return this.http.post(`${this.usersEndpoint}register`, {user_name : userName, email : userEmail, password : userPassword}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // POST Delete Observable
  deleteUser(userId: number) {
    return this.http.delete(`${this.usersEndpoint}${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // GET All Users Observable
  getUsers() {
    return this.http.get(this.usersEndpoint, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  // PUT All User Observable
  updateUser(userId: number, userEmail: string) {
    return this.http.put(`${this.usersEndpoint}${userId}`, {email : userEmail}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // GET User Observable based on passed in User ID
  getUser(userId: number) {
    return this.http.get(`${this.usersEndpoint}${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  
}
