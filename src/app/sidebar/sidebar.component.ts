import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
	selector: 'sidebar',
	templateUrl: 'sidebar.component.html',
	styleUrls: ['sidebar.css']
})

export class SidebarComponent {
	constructor(private _router: Router){}
	logout() {
		window.localStorage.removeItem('auth_key');
		this._router.navigate(['login']);
	}
}