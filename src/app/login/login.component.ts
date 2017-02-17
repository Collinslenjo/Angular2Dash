import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.css'],
	providers: [AuthService]
})

export class LoginComponent {
	localUser = {
		email : '',
		password: ''
	};
	constructor(
		private _service: AuthService,
		private _router: Router
	) {}

	login() {
		this._service.loginfn(this.localUser).then((res) => {
			if(res)
			this._router.navigate(['dashboard']);
			else
			console.log(res);
		})
	}
}