import { Component } from '@angular/core';
/**import { LoginComponent } from './loginComponent';*/
import { ROUTER_DIRECTIVES,Router } from '@angular/router';


@Component({
	selector:'my-app',
	template:'<router-outlet></router-outlet>',
	directives:[ROUTER_DIRECTIVES]
})
export class AppComponent{
	
}