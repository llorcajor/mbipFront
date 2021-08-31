import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProjectService } from '../project/project.service';
import { FollowService } from '../services/follow.service';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from '../services/category.service';
import { DropdownDirective } from '../directives/dropdown.directive';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss'],
  providers: [ProjectService, FollowService, CategoryService]
})
export class OtherProjectsComponent implements OnInit {
  faBell = faBell;
  faCaretSquareDown = faCaretSquareDown;
  projects: Project[]=[];
  follows: any;
  private token: any;
  identity: any;
  displayModal: boolean= false;
  public page!: number;
  public next_page: number | undefined;
  public prev_page: number | undefined;
  public number_page: number[]= [];
  public categories:any;
  public category_id: any = 0;

  
  constructor(private _projectService: ProjectService, private _userService: UserService, private _route: ActivatedRoute, private _router: Router, private _followService: FollowService, private _categoryService: CategoryService) { 
    this.identity= this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.getCategories();
    console.log(this.category_id);
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
        
      
      },
      error => {
        console.log(error);
        
      }
    );
  }

  onMatch(id: number){
    this._projectService.onMatch(this.token, id).subscribe(
      response => {
        alert('Match realizado correctamente');
        console.log(response); 
      },
      error => {
        alert('Match realizado correctamente');
        console.log(error);
        
      }
      
    )
    
    
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

  getCategories(){
    this._categoryService.getCategories(this.token).subscribe(
      response => {
        this.categories= response.categories;
        console.log(this.categories);
      },
      error => {
        console.log(error);
        
      }
    );
  }

  selectCategory(id: any){
    this.category_id = id;
    console.log(this.category_id);
  }

}
