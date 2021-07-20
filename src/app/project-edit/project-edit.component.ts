import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../project/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { Category } from '../models/category.model';



@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  providers: [UserService, ProjectService]
})
export class ProjectEditComponent implements OnInit {
  public project: Project;
  public identity;
  public token;
  public category!: Category;

  constructor(private _projectService: ProjectService, private _route: ActivatedRoute, private _router: Router, private _userService: UserService) { 
    this.identity = this._userService.getIdentity();
    this.project = new Project(1,'','','','', this.category,this.identity.sub,'');

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
        },
        error => {
          console.log(error);
        }
        
      );
    });
  }

  onSubmit(form: NgForm){
    this._projectService.update(this.project, this.token, this.project.id).subscribe(
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

