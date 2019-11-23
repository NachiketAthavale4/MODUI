import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../Models/user-entity';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { Technology } from '../Models/technology';
import { TechnologyResponse } from '../Models/tech-response';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css'],
  providers: [ UserRegisterService ]
})
export class MentorSignupComponent implements OnInit {

  constructor(private register : UserRegisterService) { }

  isMentorCreated : string = null;

  technologyList : Technology[] = [];

  technologyName : string = null;

  mentor : UserEntity = {
    FirstName : null,
    LastName : null,
    UserName : null,
    Password : null,
    ContactNumber : null,
    Role : 'M',
    EmailId : null,
    LinkedInUrl : null,
    YearsOfExperience : null,
    TechnologyId : null
  };

  ngOnInit() {
    this.register.getAllTechnologies().subscribe({
      next: techResponse => {
        this.technologyList = techResponse
      },
      error: err => console.log(err)
    });
  }

  onSubmit(form : NgForm){
    this.register.getTechnologyByName(this.technologyName).subscribe({
      next: techResponse => {
        this.mentor.TechnologyId = techResponse
        console.log('Technology Id',this.mentor.TechnologyId)
        this.register.registerUser(this.mentor).subscribe({
          next : () => this.isMentorCreated = "Sucessful",
          error : err => console.log(err)
        })
      },
      error: err => console.log(err)
    });
  }

}
