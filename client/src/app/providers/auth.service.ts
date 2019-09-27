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
  is_Authenticated: boolean = false;
  is_Admin: boolean = false;
  // isAuth: boolean = false;

  setAuth(isAuthenticated: boolean): void {
    this.is_Authenticated = isAuthenticated;
  }
  getAuth(): boolean {
    return this.is_Authenticated;
  }
  setAdmin(isAdmin: boolean): void {
    this.is_Admin = isAdmin;
  }
  getAdmin(): boolean {
    return this.is_Admin;
  }

}