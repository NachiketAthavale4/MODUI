import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../Models/user-entity';
import { NgForm } from '@angular/forms';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { UserResponse } from '../Models/user-response';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  providers: [ UserRegisterService ]
})
export class UserSignupComponent implements OnInit {

  constructor(private register : UserRegisterService) { }

  user : UserEntity = {
    FirstName : null,
    LastName : null,
    UserName : null,
    Password : null,
    ContactNumber : null,
    Role : 'U',
    EmailId : null,
    LinkedInUrl : null,
    YearsOfExperience : null,
    TechnologyId : null
  };

  userRegisterSuccessful : string = null;

  onSubmit(form: NgForm) {
    console.log('form submitted');
    this.register.registerUser(this.user).subscribe(
      (response : UserResponse) => 
        this.userRegisterSuccessful = "Success",
      (error : any) => console.log(error)
    );
  }

  ngOnInit() {
  }

}
