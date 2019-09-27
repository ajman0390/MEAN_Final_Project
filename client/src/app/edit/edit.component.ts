import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../providers/user.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any = {};
  ID: number = sessionStorage.userID;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // call getLeagues() method in Leagues Service
    
    this.userService.getUser(this.ID).subscribe(data => {
      this.user = data;
    });
  }

}
