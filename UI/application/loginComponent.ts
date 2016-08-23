import { Component , Injectable} from '@angular/core';
import { LoginModel } from './models/loginModel';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Properties } from './models/properties';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';



@Component({
	selector:'login-content',
	templateUrl:'views/login.html',
	providers:[LoginModel,Properties],
	directives:[FORM_DIRECTIVES],
	styles:[`
        .ng-valid {
          border: 1px solid #42A948;
        }
        .ng-invalid {
            border: 1px solid #a94442;
        }
    `]
})
@Injectable()
export class LoginComponent{
	
	loginRes:String;
    
    loginModel=new LoginModel;
    prop=new Properties;

	login=function(){			

		this.postReqData(this.loginModel.email,this.loginModel.password).subscribe(
			 (data:any) => { this.loginRes = data, 
			 console.log(data) , 
			 this.manipulateResponse(data);

			 if(data.resultCode==1001)
			 	alert("1101 "+data.resultDescription);
			 },
			(error:any)=>console.log("error"),	
			()=>console.log("finished"));
		
	 }


	manipulateResponse = function(objt:any){
		console.log(objt.resultCode);
		console.log(objt.resultDescription);  
	}
	

	loginForm : ControlGroup;

	constructor(private http:Http, fBuilder:FormBuilder){
		console.log(this.prop.baseUrl);

		this.loginForm=fBuilder.group({
		email : ['',Validators.compose([Validators.required])],
		password : ['',Validators.compose([Validators.required])]
		});
	}

  private heroesUrl = 'http://date.jsontest.com';
	
	postReqData= function(email:any,password:any){
		var json=JSON.stringify(
			{
    		"loginInfo": {
       			 "password": email,
       			 "userName": password
						}
			});
		
  	  	var headers=new Headers();
  	  	console.log(json);
  	  	headers.append('Content-Type','application/json');
  	  	return this.http.post(this.prop.baseUrl+'login/validateUser',json,{headers: headers}).map((res:any)=>res.json());
  	  	/**return this.http.get(this.heroesUrl).map((res:any) =>res.json());*/
  	  }

}