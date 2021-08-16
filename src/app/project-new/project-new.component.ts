import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../project/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { Category } from '../models/category.model';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { DropdownDirective } from '../directives/dropdown.directive';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss'],
  providers: [UserService, ProjectService, CategoryService]
})
export class ProjectNewComponent implements OnInit {
  faBell = faBell;
  public project: Project;
  public identity;
  public token;
  public categories:any;
  public category!: any;
  

  constructor(private _projectService: ProjectService, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _categoryService: CategoryService) { 
    this.identity = this._userService.getIdentity();
    this.project = new Project(1,'','','',this.category,this.identity.sub,'');
    this.token = this._userService.getToken();
    this.getCategories();
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    this._projectService.create(this.token ,this.project).subscribe(
      response => {
        console.log(response);
        alert('Proyecto creado correctamente');
        // this._router.navigate(['/myprojects']);
      },
      error => {
        console.log(error);
        alert('Proyecto creado correctamente');
        // this._router.navigate(['/myprojects']);
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
