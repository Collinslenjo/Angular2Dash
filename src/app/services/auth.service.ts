import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
    isLoggedin: boolean;

    constructor(private _http:Http) {

    }

    loginfn(usercreds) {
        this.isLoggedin = false;
        var headers = new Headers();
        var creds = 'email=' + usercreds.username + '&password=' + usercreds.password;

        return new Promise((resolve) => {
        headers.append('Content-Type','application/X-www-form-urlencoded');
        this._http.post('http://localhost:8000/api/login', creds, {headers: headers}).subscribe((data) => {
            if(data.json().success){
            window.localStorage.setItem('auth_key', data.json().token);
                this.isLoggedin= true;
                resolve(this.isLoggedin);
            }
        })
        })
    }
}