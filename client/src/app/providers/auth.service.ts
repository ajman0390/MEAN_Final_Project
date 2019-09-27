import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// ~ WIP ~
// TODO: authService to auth login/is_Admin for nav links
export class AuthService {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  // isAuth: boolean = false;

  setAuth(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated;
  }
  getAuth(): boolean {
    return this.isAuthenticated;
  }
  setAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }
  getAdmin(): boolean {
    return this.isAdmin;
  }

}