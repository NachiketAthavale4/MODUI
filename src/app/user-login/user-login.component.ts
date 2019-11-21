import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { NgForm, NgModel } from '@angular/forms';
import { UserCredentials } from './Models/user-credentials';
import { AuthenticationResponse } from './Models/login-response';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [ UserLoginService ]
})
export class UserLoginComponent{

  constructor(private loginService: UserLoginService) { }

  isUserLoginSuccessful: boolean = false;

  userCredentials : UserCredentials = {
    userName : null,
    password : null
  };

  authResponse : AuthenticationResponse = {
    Fault : null,
    SuccessIndicator : false,
    TokenComplex : null
  };
  
  onSubmit(form: NgForm){
    console.log("Form submitted");
    if(this.userCredentials != null 
      && this.userCredentials.userName != null
      && this.userCredentials.password != null){
        this.loginService.loginUser(this.userCredentials)
          .subscribe(
              (response: AuthenticationResponse) => 
                this.setTokenResponse(response),
              (error : AuthenticationResponse) =>
                  console.log(error != null && error.Fault != null 
                                ? error.Fault.faultMessage 
                                : null)
          );
      }
  }

  setTokenResponse(response : AuthenticationResponse){
    this.authResponse = response;
    console.log(this.authResponse.TokenComplex);
    if(this.authResponse != null && this.authResponse.TokenComplex != null){
      localStorage.setItem('token',this.authResponse.TokenComplex.Token);
      localStorage.setItem('tokenExpiration',this.authResponse.TokenComplex.Expiration.toString());
    }
  }

}
