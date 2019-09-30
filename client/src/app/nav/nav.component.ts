import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sub: any;
  ID: number = 0;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

    // get userId from Query Params
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
        // this.userName = params['userId'];
      })

  }

  isAuth(): boolean {
    return this.authService.getAuth();
  }
  isAdmin(): boolean {
    return this.authService.getAdmin();
  }

  // Nav function links
  goHome(): void {
    this.router.navigate(['/'], { queryParams: { ID: this.ID } });
  }
  goLogin(): void {
    this.router.navigate(['login']);
  }
  goRegister(): void {
    this.router.navigate(['register']);
  }
  goAdmin(): void {
    this.router.navigate(['admin'], { queryParams: { ID: this.ID } });
  }
  goEdit(): void {
    this.router.navigate(['edit'], { queryParams: { ID: this.ID } });
  }
  goTeams(): void {
    this.router.navigate(['teams'], { queryParams: { ID: this.ID } });
  }
  goLogout(): void {
    this.authService.setAdmin(false);
    this.authService.setAuth(false);
    this.router.navigate(['/']);
  }

}
