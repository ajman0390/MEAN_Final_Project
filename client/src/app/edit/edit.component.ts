import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../providers/user.service';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pageTitle = 'Edit User Profile';
  oldUserData: any = {};
  user: any = {};
  ID: number = 0;
  userName: string = '';
  password: string = '';
  email: string = '';
  error: boolean = false;
  errMsg: string = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (!(this.authService.getAuth())) {
      this.router.navigate(['/login']);
    }

    this.ID = this.authService.getID();
    // console.log(this.ID)

    this.userService.getUser(this.ID).subscribe(data => {
      this.user = data;
      this.oldUserData = data;
      this.userName = this.user.USER_NAME;
      this.password = this.user.PASSWORD;
      this.email = this.user.EMAIL;
    });
  }

  onSubmit(): void {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (this.userName == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.email == '') {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    } else if (!emailPattern.test(this.email)) {
      this.errMsg = 'Valid Email Address is required.';
      this.error = true;
    } else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else if (this.password.length < 8) {
      this.errMsg = 'Password must be at least 8 chars.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call userService to edit
      this.userService.updateUser(this.ID, this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Update unsuccessful.';
          this.error = true;
        } else {
          this.ngOnInit();
        }
      });
    }
  }

  onDelete(userId: number): void {
    // Call UserService to delete User
    this.userService.deleteUser(this.ID).subscribe(data => {
      this.goLogout();
    });
  }

  onReset(): void {
    this.userName = this.oldUserData.USER_NAME;
    this.password = this.oldUserData.PASSWORD;
    this.email = this.oldUserData.EMAIL;
  };

  goLogout(): void {
    this.authService.setAdmin(false);
    this.authService.setAuth(false);
    this.authService.setID(null);
    this.router.navigate(['/']);
  }
}
