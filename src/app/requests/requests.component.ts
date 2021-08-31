import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProjectService } from '../project/project.service';
import { FollowService } from '../services/follow.service';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  providers: [ProjectService, FollowService]
})
export class RequestsComponent implements OnInit {
  faBell = faBell;
  faCaretSquareDown = faCaretSquareDown;
  projects: Project[]=[];
  follows: any;
  private token: any;
  identity: any;
  constructor(private _projectService: ProjectService, private _userService: UserService, private _route: ActivatedRoute, private _router: Router, private _followService: FollowService) { 
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();
    
  }

  ngOnInit(): void {
    this.checkMatch();
  }

  checkMatch(){
    this._followService.checkMatch(this.token).subscribe(
      response => {
        console.log(response);
        this.follows= response.query;
      },
      error => {
        console.log(error);
      }

    )
  }
  
    deleteFollow(id:number){
      this._followService.delete(this.token, id).subscribe(
        response => {
          alert('Se ha rechazado la solicitud');
          this._router.navigate(['/home']);
        },
        error => {
          console.log(error);
        }
        );
  }

  sendMail(id: number, id2:number){
    this._followService.sendMail(this.token, id).subscribe(
      response => {
        console.log(response);
        alert('Se ha aceptado la solicitud');
        this._followService.delete(this.token, id2).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
          );
        this._router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
      );
  }

}
