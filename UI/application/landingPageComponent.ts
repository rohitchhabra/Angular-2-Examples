import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';

declare var $:any;
@Component({
	selector:'landing-page',
	/**template:'<h2>This is landing page</h2>'*/
	templateUrl:'views/landing-page.html',
	directives:[ROUTER_DIRECTIVES]
})
export class LandingPageComponent{
	
	constructor(private router:Router){}

	onStart=function(){
	this.router.navigateByUrl('/signUpPage');
	}
}
