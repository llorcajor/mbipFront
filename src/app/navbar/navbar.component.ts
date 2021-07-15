import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit, DoCheck {
  public identity: any;
  public token: any;
  constructor(private _userService: UserService) { }
  

  ngOnInit(){
   

  }

  ngDoCheck(){
    this.loadUser();
  }
  
 

  loadUser(){
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
