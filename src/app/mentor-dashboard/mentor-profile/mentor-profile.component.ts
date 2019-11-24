import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../models/user-entity';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editSettingsValue : boolean = false;

  onEditSettingsClicked(){
    this.editSettingsValue = true;
  }

  updateUser(){
    this.editSettingsValue = false;
  }

  user : UserEntity = {
    ContactNumber : 9878767687,
    EmailId : "hellothere43@jediorder.com",
    FirstName : "Obi-Wan",
    LastName : "Kenobi",
    LinkedInUrl : "linkedin.com/obiwan",
    Password : null,
    Role : "U",
    TechnologyId : null,
    TechnologyName : "Angular",
    UserName: "idontthinkso32",
    YearsOfExperience : 3
  }


}
