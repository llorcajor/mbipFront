import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProjectService } from './project.service';
import { faBell} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  faBell = faBell;
   projects: Project[]=[];
   private token: any;
   identity: any;
   public page!: number;
   public next_page: number | undefined;
   public prev_page: number | undefined;
   public number_page: number[]= [];


  constructor(private _projectService: ProjectService, private _userService: UserService, private _route: ActivatedRoute, private _router: Router) {
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.actualPage();
  }

  actualPage(){
    this._route.params.subscribe(params => {
      var page = +params['page'];

      if(!page){
        page = 1;
        this.prev_page=1;
        this.next_page=2;
      }
      this.getProjects(page);
    });
  }

  getProjects(page: number){
    this._projectService.getProjects(this.token, page).subscribe(
      response => {
        console.log(response);
        this.projects= response.projects;
        var number_pages= [];
        for(var i=1; i<=response.total_page; i++){
          number_pages.push(i);
        }
        this.number_page = number_pages;

        if(page >= 2){
          this.prev_page = page-1;
        }else{
          this.prev_page = 1;
        }

        if(page < response.total_page){
          this.next_page = page+1;
        }else{
          this.next_page = response.total_page;
        }
        
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  deleteProject(id: number){
    this._projectService.delete(this.token, id).subscribe(
      response => {
        this.actualPage();
      },
      error => {
        console.log(error);
      }
      );
      
  }


}
