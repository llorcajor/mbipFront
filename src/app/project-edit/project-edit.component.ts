import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../project/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { Category } from '../models/category.model';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from '../services/category.service';




@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  providers: [UserService, ProjectService, CategoryService]
})
export class ProjectEditComponent implements OnInit {
  faBell = faBell;
  public project: Project;
  public identity;
  public token;
  public category!: any;
  public categories:any;
  

  constructor(private _projectService: ProjectService, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _categoryService: CategoryService) { 
    this.identity = this._userService.getIdentity();
    this.project = new Project(1,'','','', this.category,this.identity.sub,'');

    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.getProject();
    this.getCategories();
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
        this._router.navigate(['/myprojects']);
      },
      error => {
        console.log(error);
        this._router.navigate(['/myprojects']);
      }
   );
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

  selectCategory(id: number){
    this.category = id;
  }
}

