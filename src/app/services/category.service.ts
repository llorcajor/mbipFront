import { EventEmitter, Injectable } from "@angular/core";
import { Category } from "../models/category.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { global } from "../services/global";

@Injectable()
export class CategoryService{
    public url: string;
    categorySelected = new EventEmitter<Category>();

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }
    

          getCategories(token: string):Observable<any>{
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                            .set('Authorization', token);

            return this._http.get(this.url+'category/all', {headers:headers});
          }

    }