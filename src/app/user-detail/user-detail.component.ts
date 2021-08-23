import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  faBell = faBell;
  public user!: User;
  public identity;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this._route.params.subscribe(params => {
      var id = +params['id'];

      this._userService.getUser(this.token, id).subscribe(
        response => {
          this.user = response.user;
          console.log(this.user);
        },
        error => {
          console.log(error);
        }
        
      );
    });
  }


}
