import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  userRole: string = "User";
  profileMentor: boolean = false;

  onRoleSet(event, role: string){
    this.userRole = role;
    if (this.userRole.toLocaleUpperCase() == "MENTOR") {
      this.profileMentor = true;
    } else {
      this.profileMentor = false;
    }
  }

  ngOnInit() {
  }

}
