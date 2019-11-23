import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-welcome-screen',
  templateUrl: './mentor-welcome-screen.component.html',
  styleUrls: ['./mentor-welcome-screen.component.css']
})
export class MentorWelcomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userCount : number = 300;
  trainingsCount : number = 400;
  userName : string = "Obi-Wan";

}
