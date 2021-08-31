import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProjectService } from '../project/project.service';
import { FollowService } from '../services/follow.service';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myrequets',
  templateUrl: './myrequets.component.html',
  styleUrls: ['./myrequets.component.scss'],
  providers: [ProjectService, FollowService]
})
export class MyrequetsComponent implements OnInit {
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
    this.checkMyMatchs();
  }

  checkMyMatchs(){
    this._followService.checkMyMatchs(this.token).subscribe(
      response => {
        console.log(response);
        this.follows= response.query;
      },
      error => {
        console.log(error);
      }

    )
  }

}
