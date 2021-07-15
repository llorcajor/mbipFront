import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../models/project.model';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {
  public project: Project;

  constructor(private _projectService: ProjectService) { 
    this.project = new Project(1,'','','','',1,1,'');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this._projectService.register(this.project).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error => {
        console.log(error);
      }
   );
  }

}
