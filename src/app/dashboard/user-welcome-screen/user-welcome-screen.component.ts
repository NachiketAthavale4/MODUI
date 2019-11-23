import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-welcome-screen',
  templateUrl: './user-welcome-screen.component.html',
  styleUrls: ['./user-welcome-screen.component.css']
})
export class UserWelcomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mentorCount : number = 200;
  trainingsCount : number = 400;
  userName : string = "Obi-Wan";

}
