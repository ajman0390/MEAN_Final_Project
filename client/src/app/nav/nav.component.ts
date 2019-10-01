import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  // check if user is Authenticated by calling getAuth() from authService
  isAuth(): boolean {
    return this.authService.getAuth();
  }
  // check if user is Admin by calling getAdmin() from authService
  isAdmin(): boolean {
    return this.authService.getAdmin();
  }

  // Nav function links

  // go to Index page view
  goHome(): void {
    this.router.navigate(['/']);
  }
  // go to Login page view
  goLogin(): void {
    this.router.navigate(['login']);
  }
  // go to Register page view
  goRegister(): void {
    this.router.navigate(['register']);
  }
  // go to Admin page view
  goAdmin(): void {
    this.router.navigate(['admin']);
  }
  // go to Edit page view
  goEdit(): void {
    this.router.navigate(['edit']);
  }
  // go to Teams page view
  goTeams(): void {
    this.router.navigate(['teams']);
  }
  // go logout the user, set Admin, Auth values to false, User ID to null
  goLogout(): void {
    this.authService.setAdmin(false);
    this.authService.setAuth(false);
    this.authService.setID(null);
    this.router.navigate(['/']);
  }

}
