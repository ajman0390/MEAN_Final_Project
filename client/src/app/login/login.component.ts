import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ID: number = 0;
  pageTitle = 'Please Login';
  userName: string = '';
  password: string = '';
  error: boolean = false;
  errMsg: string = '';
  
  // create instance of UserService
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(): void {
    if (this.userName == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to authenticate
      this.userService.login(this.userName, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful.';
          this.error = true;
          this.authService.setAuth(false);
        } else {
          if (data['IS_ADMIN'])
          {
            this.authService.setAdmin(true);
          } else {
            this.authService.setAdmin(false);
          }
          this.authService.setAuth(true);
          this.ID = data['ID'];
          this.authService.setID(this.ID);
          this.router.navigate(['teams']);
        }
      });
    }
  }

  onReset(): void {
    this.userName = '';
    this.password = '';

    this.error = false;
    this.errMsg = '';
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goRegister(): void {
    this.router.navigate(['register']);
  }

}
