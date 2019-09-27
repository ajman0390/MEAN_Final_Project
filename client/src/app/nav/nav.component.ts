import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private authenticated: boolean = false;
  private administrator: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authenticated = this.authService.getAuth();
    this.administrator = this.authService.getAdmin();
  }

  isAuth(): boolean {
    return this.authService.getAuth();
  }
  isAdmin(): boolean {
    return this.authService.getAdmin();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
  goLogin(): void {
    this.router.navigate(['login']);
  }
  goRegister(): void {
    this.router.navigate(['register']);
  }
  goAdmin(): void {
    this.router.navigate(['admin']);
  }
  goEdit(): void {
    this.router.navigate(['edit']);
  }
  goTeams(): void {
    this.router.navigate(['teams']);
  }
  goLogout(): void {
    this.router.navigate(['/']);
  }

}
