import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.css']
})

export class RegisterComponent {
	constructor(public router: Router, public http: Http) {
  }

  signup(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:8000/users', body, { headers: contentHeaders })
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

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }
}
