import { EventEmitter, Injectable } from "@angular/core";
import { Project } from "../models/project.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { global } from "../services/global";


@Injectable()
export class ProjectService{
    public url: string;
    projectSelected = new EventEmitter<Project>();

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }
    
    
    
        getProjects(token: string, page:number):Observable<any>{
    
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                            .set('Authorization', token);
    
            return this._http.get(this.url+'project/list?page='+page, {headers:headers});
        }

        getProject(token: string, id:number):Observable<any>{
            
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                            .set('Authorization', token);
    
            return this._http.get(this.url+'project/detail/'+id, {headers:headers});
        }
          
        create(token: any, project: Project):Observable<any>{
            let json= JSON.stringify(project);
            let params = 'json='+json;
    
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                            .set('Authorization', token);
    
            return this._http.post(this.url+'project/new', params, {headers:headers});
        }

        update(project: Project, token: string, id:number):Observable<any>{
            let json= JSON.stringify(project);
            let params = 'json='+json;
    
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                            .set('Authorization', token);
    
            return this._http.put(this.url+'project/edit/'+id, params, {headers:headers});
        }

        delete(token: string, id:number):Observable<any>{
    
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                            .set('Authorization', token);
    
            return this._http.delete(this.url+'project/remove/'+id, {headers:headers});
        }
    }