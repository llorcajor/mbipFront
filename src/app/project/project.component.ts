import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { UserService } from '../services/user.service';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
   projects: Project[]=[];
   private token: any;
  identity: any;

  constructor(private projectService: ProjectService, private _userService: UserService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.loadUser();
  }

  loadUser(){
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
