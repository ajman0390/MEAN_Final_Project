import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../providers/user.service';
import { AuthService } from './../providers/auth.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sub: any;
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
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (!(this.authService.getAuth())) {
      this.router.navigate(['/']);
    }

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
        // this.userName = params['username'];
      });
    console.log(this.ID)

    this.userService.getUser(this.ID).subscribe(data => {
      this.user = data;
      this.oldUserData = data;
      this.userName = this.user.USER_NAME;
      this.password = this.user.PASSWORD;
      this.email = this.user.EMAIL;
    });
  }

  onSubmit(): void {
    if (this.userName == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.email == '') {
      this.errMsg = 'Email is required.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call userService to edit
      this.userService.updateUser(this.ID, this.userName, this.email, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Update unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['teams'], { queryParams: { ID: this.ID } });
        }
      });
    }
  }

  onDelete(userId: number): void {
    // Call UserService to delete User
    this.userService.deleteUser(this.ID).subscribe(data => {
      // this.router.navigate(['admin']);
      window.location.reload();
    });
  }

  onReset(): void {
    this.userName = this.oldUserData.USER_NAME;
    this.password = this.oldUserData.PASSWORD;
    this.email = this.oldUserData.EMAIL;
  };
}
