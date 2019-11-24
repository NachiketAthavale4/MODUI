import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../models/user-entity';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
    LinkedInUrl : null,
    Password : null,
    Role : "U",
    TechnologyId : null,
    UserName: "idontthinkso32",
    YearsOfExperience : null
  }

}
