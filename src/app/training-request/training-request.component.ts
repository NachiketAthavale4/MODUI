import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-request',
  templateUrl: './training-request.component.html',
  styleUrls: ['./training-request.component.css']
})
export class TrainingRequestComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
