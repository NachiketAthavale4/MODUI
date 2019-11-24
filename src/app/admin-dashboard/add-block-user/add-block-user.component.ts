import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../models/user-entity';

@Component({
  selector: 'app-add-block-user',
  templateUrl: './add-block-user.component.html',
  styleUrls: ['./add-block-user.component.css']
})
export class AddBlockUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enableEdit = false;
  enableEditIndex = null;

  enableTrainerEdit = false;
  enableEditIndexTrainer = null;

  BlockUser(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    this.userList[i].Active = false;
    console.log(i);
    console.log(this.userList[i].Active);
  }

  UnblockUser(i){
    this.enableEditIndex = null;
    this.userList[i].Active = true;
    console.log(i);
    console.log(this.userList[i].Active);
  }

  BlockTrainer(e, i) {
    this.enableTrainerEdit = true;
    this.enableEditIndexTrainer = i;
    this.trainerList[i].Active = false;
    console.log(i);
    console.log(this.trainerList[i].Active);
  }

  UnblockTrainer(i){
    this.enableEditIndexTrainer = null;
    this.trainerList[i].Active = true;
    console.log(i);
    console.log(this.trainerList[i].Active);
  }

  userList : UserEntity[] = [
    {
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
    YearsOfExperience : 3,
    Active : true
  },
  {
    ContactNumber : 9878767687,
    EmailId : "frommypointofview@jediorder.com",
    FirstName : "Anakin",
    LastName : "Skywalker",
    LinkedInUrl : "linkedin.com/vader",
    Password : null,
    Role : "U",
    TechnologyId : null,
    TechnologyName : "Angular",
    UserName: "vaderrocks42",
    YearsOfExperience : 3,
    Active : true
  }
]

trainerList : UserEntity[] = [
  {
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
  YearsOfExperience : 3,
  Active : true
},
{
  ContactNumber : 9878767687,
  EmailId : "frommypointofview@jediorder.com",
  FirstName : "Anakin",
  LastName : "Skywalker",
  LinkedInUrl : "linkedin.com/vader",
  Password : null,
  Role : "U",
  TechnologyId : null,
  TechnologyName : "Angular",
  UserName: "vaderrocks42",
  YearsOfExperience : 3,
  Active : true
}
]

}
