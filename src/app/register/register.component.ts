import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;

  constructor(private _userService: UserService, private _router: Router) { 
    this.user = new User(1, '', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){

    
    
    this._userService.register(this.user).subscribe(
       response => {
         console.log(response);
         if(response.status === 'error'){
          alert('El usuario ya existe');
         }
         else{
          this._router.navigate(['/login']);
         }
         
       },
       error => {
         console.log(error);
       }
    );
    
  }

}
