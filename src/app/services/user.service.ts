import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {global} from './global';

@Injectable()
export class UserService{
    public url: string;
    public identity: any;
    public token: any;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }


    register(user: User):Observable<any>{
        let json= JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'create', params, {headers: headers});
    }

    signup(user: User, gettoken: string):Observable<any>{
        if(gettoken == 'true'){
            user.gettoken = gettoken;
        }
        
        
        let json= JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'login', params, {headers:headers});
    }

    update(user: User, token: string):Observable<any>{
        let json= JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                        .set('Authorization', token);

        return this._http.put(this.url+'user/edit', params, {headers:headers});
    }

    getIdentity(){
        let identity = localStorage.getItem('identity');

        if(identity && identity != 'undefined'){
            this.identity= JSON.parse(identity);
        }else{
            this.identity = null;
        }

        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');

        if(token && token != 'undefined'){
            this.token= token;
        }else{
            this.token = null;
        }

        return this.token;
    }
}

