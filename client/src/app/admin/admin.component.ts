import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        this.users.push(new User(user.ID, user.USER_NAME, user.EMAIL, user.PASSWORD, user.is_Admin));
      })
    });
  }

  onDelete(userId: number): void {
    // Call UserService to delete User
    this.userService.deleteUser(userId).subscribe(data => {
      //this.router.navigate(['manager']);
      window.location.reload();
    });
  }

  onEdit(userId: number): void {
    // Call UserService to delete User
    this.userService.updateUser(userId).subscribe(data => {
      //this.router.navigate(['manager']);
      window.location.reload();
    });
  }
}
