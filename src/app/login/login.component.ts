
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  public identity: any;
  public status: string | undefined;
  public token: any;

  constructor(private _userService: UserService, private _router: Router, private _route: ActivatedRoute) { 
    this.user = new User(1, '', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(form: NgForm){
    this._userService.signup(this.user, 'false').subscribe(
      response => {
        if(!response.status || response.status != 'error'){
          this.status = 'success';
          this.identity = response;
        // SACAR TOKEN

          this._userService.signup(this.user, 'true').subscribe(
            response => {
              if(!response.status || response.status != 'error'){
                
                this.token = response;
                console.log(this.identity);
                console.log(this.token);

                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));

                this._router.navigate(['/inicio']);

              }else{
                this.status = 'error';
              }
            },
            error => {
              this.status = 'error';
              console.log(error);
            }
          );



          
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

  logout(){
    this._route.params.subscribe(params => {
      let sure = +params['sure'];

      if(sure == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        this._router.navigate(['/login']);
      }
      
    });
  }

}
