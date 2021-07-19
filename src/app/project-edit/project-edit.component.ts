import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../project/project.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  public project: Project;
  public identity;
  public token;

  constructor(private _projectService: ProjectService, private _userService: UserService) {
    this.identity = this._projectService.getProjects();
    this.token = this._userService.getToken();
    this.project = new Project(1, '', '', '', '', 1, 1, '');
   }

  ngOnInit(): void {
  }

}
