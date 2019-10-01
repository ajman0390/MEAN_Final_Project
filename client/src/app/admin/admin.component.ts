import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';
import { UserService } from './../providers/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pageTitle = 'Admin';
  users: Array<User> = [];

  // create instance of UserService
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!(this.authService.getAuth() && this.authService.getAdmin())) {
      this.router.navigate(['login']); // route to Login
    }

    // Get all users in which the user is Not an Admin
    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        if (!user.IS_ADMIN){
          this.users.push(new User(user.ID, user.USER_NAME, user.EMAIL, user.PASSWORD, user.IS_ADMIN));
        }
        
      })
    });
  }
}
