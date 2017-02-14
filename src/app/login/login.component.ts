import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

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

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:8000/api/request/payment/checkout', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['dashboard']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['register']);
  }

}