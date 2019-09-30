import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  is_Authenticated: boolean = false;
  is_Admin: boolean = false;
  ID: number = 0;

  // Set Authentication Status
  setAuth(isAuthenticated: boolean): void {
    this.is_Authenticated = isAuthenticated;
  }

  // Get Authentication Status
  getAuth(): boolean {
    return this.is_Authenticated;
  }

  // Set Administrator Status
  setAdmin(isAdmin: boolean): void {
    this.is_Admin = isAdmin;
  }

  // Get Administrator Status
  getAdmin(): boolean {
    return this.is_Admin;
  }

  // Set User ID
  setID(userId: number): void {
    this.ID = userId;
  }
  
  // Get User ID
  getID(): number {
    return this.ID;
  }

}