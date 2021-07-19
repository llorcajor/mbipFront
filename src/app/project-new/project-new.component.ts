import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../project/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss'],
  providers: [UserService, ProjectService]
})
export class ProjectNewComponent implements OnInit {
  public project: Project;
  public identity;
  public token;

  constructor(private _projectService: ProjectService, private _route: ActivatedRoute, private _router: Router, private _userService: UserService) { 
    this.identity = this._userService.getIdentity();
    this.project = new Project(1,'','','','',1,this.identity.sub,'');

    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    this._projectService.create(this.token ,this.project).subscribe(
      response => {
        console.log(response);
        this._router.navigate(['/inicio']);
      },
      error => {
        console.log(error);
        this._router.navigate(['/inicio']);
      }
   );
  }
}
