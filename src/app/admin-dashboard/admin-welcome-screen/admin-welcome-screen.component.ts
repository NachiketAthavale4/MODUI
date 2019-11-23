import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-welcome-screen',
  templateUrl: './admin-welcome-screen.component.html',
  styleUrls: ['./admin-welcome-screen.component.css']
})
export class AdminWelcomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userCount : number = 300;
  mentorCount : number = 200;
  trainingsCount : number = 400;
  userName : string = "Obi-Wan";

}
