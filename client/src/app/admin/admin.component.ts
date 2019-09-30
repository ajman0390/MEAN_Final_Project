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

  users: Array<User> = [];

  // create instance of UserService
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!(this.authService.getAuth() && this.authService.getAdmin())) {
      this.router.navigate(['login']);
    }

    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        this.users.push(new User(user.ID, user.USER_NAME, user.EMAIL, user.PASSWORD, user.is_Admin));
      })
    });
  }

  onDelete(userId: number): void {
    // Call UserService to delete User
    this.userService.deleteUser(userId).subscribe(data => {
      // this.router.navigate(['admin']);
      // window.location.reload();
    });
  }

  // onEdit(userId: number): void {
  //   // Call UserService to delete User
  //   this.userService.updateUser(userId).subscribe(data => {
  //     this.router.navigate(['edit']);
  //     // window.location.reload();
  //   });
  // }
}
