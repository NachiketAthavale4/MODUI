import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../models/user-entity';

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})
export class MentorSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchTerm : string = "Angular";

  trainerList : UserEntity[] = [
    {
      ContactNumber : null,
      EmailId : "idontthinkso@jediorder.com",
      FirstName : "Obi-Wan",
      LastName : "Kenobi",
      Role : "M",
      LinkedInUrl : "linkedin.com/obi-wan",
      Password : null,
      YearsOfExperience : 5,
      TechnologyId : null,
      TechnologyName : "Angular",
      UserName : "obiwanrocks42"
    }
  ];

}
