import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  is_Authenticated: boolean = false;
  is_Admin: boolean = false;

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
  // setID(isAdmin: boolean): void {
  //   this.is_Admin = isAdmin;
  // }
  // getID(): boolean {
  //   return this.is_Admin;
  // }

}