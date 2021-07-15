import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public user: User;
  public identity;
  public token;

  constructor(private _userService: UserService) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = new User(this.identity.sub, this.identity.name, this.identity.surname, this.identity.email, '', '', 'ROLE_USER', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this._userService.update(this.token, this.user).subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
