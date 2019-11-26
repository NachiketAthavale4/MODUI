import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../models/user-entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})
export class MentorSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchTerm = this.route.snapshot.queryParamMap.get('searchterm');
    this.trainerList = 
      this.trainerList.filter(
        x => x.TechnologyName.toUpperCase() == this.searchTerm.toUpperCase());
  }

  searchTerm : string = null;

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
    },
    {
      ContactNumber : null,
      EmailId : "idontthinkso@jediorder.com",
      FirstName : "Ben",
      LastName : "Kenobi",
      Role : "M",
      LinkedInUrl : "linkedin.com/obi-wan",
      Password : null,
      YearsOfExperience : 5,
      TechnologyId : null,
      TechnologyName : "Bootstrap",
      UserName : "obiwanrocks42"
    },
    {
      ContactNumber : null,
      EmailId : "idontthinkso@jediorder.com",
      FirstName : "Darth",
      LastName : "Vader",
      Role : "M",
      LinkedInUrl : "linkedin.com/obi-wan",
      Password : null,
      YearsOfExperience : 5,
      TechnologyId : null,
      TechnologyName : "Bootstrap",
      UserName : "obiwanrocks42"
    }
  ];

}
