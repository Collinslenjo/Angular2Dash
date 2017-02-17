import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/map';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.css']
})

export class LoginComponent {
	constructor(
		public router: Router, 
		public http: Http
		) {}

  login(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    this.http.post('http://localhost:8000/api/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['/dashboard']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.defaultPrevented();
    this.router.navigate(['register']);
  }
}