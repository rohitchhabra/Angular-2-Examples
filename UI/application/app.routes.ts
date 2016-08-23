import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './loginComponent';
import { LandingPageComponent } from './landingPageComponent';
import { SignUpComponent } from './signUpComponent';
import { ManageProfile } from './manageProfile';

const route:RouterConfig=[

	{path:'landingPage' , component:LandingPageComponent} ,
	{path:'' , component:LandingPageComponent } ,
	{path:'signUpPage' , component:SignUpComponent},
	{path:'loginPage' , component:LoginComponent},
	{path:'manageProfile' , component:ManageProfile}
];


export const appRouterProviders = [
	provideRouter(route)
];