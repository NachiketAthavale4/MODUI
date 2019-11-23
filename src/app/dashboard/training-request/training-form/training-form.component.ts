import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trainerName : string = "Obi-Wan";
  trainerEmail : string = "HelloThere@jediorder.com";

  trainingTimeSlots: string[] = [
    "09:00 AM - 11:00 AM",
    "10:00 AM - 12:00 PM",
    "11:00 AM - 01:00 PM",
    "12:00 PM - 02:00 PM",
    "01:00 PM - 03:00 PM",
    "02:00 PM - 04:00 PM",
    "03:00 PM - 05:00 PM",
    "04:00 PM - 06:00 PM"
  ];

}
