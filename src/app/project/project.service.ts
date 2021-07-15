import { EventEmitter, Injectable } from "@angular/core";
import { Project } from "../models/project.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { global } from "../services/global";

@Injectable()
export class ProjectService{
    public url: string;
    public identity: any;
    public token: any;
    projectSelected = new EventEmitter<Project>();

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }
    
        private projects: Project[] =[
            new Project(1,'Travel', 'Food','Pequeña descripcion de prueba para ver que tal queda','https://i0.wp.com/goula.lat/wp-content/uploads/2019/12/hamburguesa-beyond-meat-scaled-e1577396155298.jpg?fit=1600%2C1068&ssl=1', 1, 1, '')
          ];
    
          getProjects(){
              return this.projects.slice();
          }
        register(project: Project):Observable<any>{
            let json= JSON.stringify(project);
            let params = 'json='+json;
    
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    
            return this._http.post(this.url+'create', params, {headers: headers});
        }
    }