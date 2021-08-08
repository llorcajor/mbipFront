import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {global} from './global';

@Injectable()
export class FollowService{
    public url: string;
    public identity: any;
    public token: any;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }


    checkMatch(token: string):Observable<any>{
            
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.get(this.url+'follow/check', {headers:headers});
    }

    checkMyMatchs(token: string):Observable<any>{
            
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.get(this.url+'follow/mycheck', {headers:headers});
    }
}
