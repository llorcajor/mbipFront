import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../project/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { faBell} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [UserService, ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  faBell = faBell;
  public project!: Project;
  public identity;
  public token;

  constructor(private _projectService: ProjectService, private _route: ActivatedRoute, private _router: Router, private _userService: UserService) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.getProject();
    
    
  }

  getProject(){
    this._route.params.subscribe(params => {
      var id = +params['id'];

      this._projectService.getProject(this.token, id).subscribe(
        response => {
          this.project = response.project;
          console.log(this.project);

        },
        error => {
          console.log(error);
        }
        
      );
    });
  }

}
