import { EventEmitter, Injectable } from "@angular/core";
import { Category } from "../models/category.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { global } from "../services/global";

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }
    
        private category: Category[] =[
            new Category(1,'Travel', 'yellow', '')
          ];

          getCategories(){

          }

    }