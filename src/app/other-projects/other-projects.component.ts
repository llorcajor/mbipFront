import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProjectService } from '../project/project.service';
import { FollowService } from '../services/follow.service';
import { faBell} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss'],
  providers: [ProjectService, FollowService]
})
export class OtherProjectsComponent implements OnInit {
  faBell = faBell;
  projects: Project[]=[];
  follows: any;
  private token: any;
  identity: any;
  displayModal: boolean= false;
  public page!: number;
  public next_page: number | undefined;
  public prev_page: number | undefined;
  public number_page: number[]= [];

  
  constructor(private _projectService: ProjectService, private _userService: UserService, private _route: ActivatedRoute, private _router: Router, private _followService: FollowService) { 
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();
    
  }

  ngOnInit(): void {
    this.checkMatch();
    this._route.params.subscribe(params => {
      var page = +params['page'];

      if(!page){
        page = 1;
        this.prev_page=1;
        this.next_page=2;
      }
      this.getOtherProjects(page);
    });
  }

  getOtherProjects(page: number){
    this._projectService.getOtherProjects(this.token, page).subscribe(
      response => {
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
        
        /*
        items_per_page: 5
        page_actual: 2
        total_items_count: 2
        total_page: 1
        */
      },
      error => {
        console.log(error);
        
      }
    );
  }

  onMatch(id: number){
    this._projectService.onMatch(this.token, id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
        
      }
      
    )
    this.openModal();
    

  }

  openModal(){
    alert('Match realizado correctamente');
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

}
