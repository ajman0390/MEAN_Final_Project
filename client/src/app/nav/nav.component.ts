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

  // isAuth(): boolean {
  //   return this.authService.getAuth()
  // }

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
  goTeams(): void {
    this.router.navigate(['teams']);
  }
  goLogout(): void {
    this.router.navigate(['/']);
  }

}
