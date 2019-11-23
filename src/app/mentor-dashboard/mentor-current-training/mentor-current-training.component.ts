import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training';

@Component({
  selector: 'app-mentor-current-training',
  templateUrl: './mentor-current-training.component.html',
  styleUrls: ['./mentor-current-training.component.css']
})
export class MentorCurrentTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trainingList : Training[] = [
    {
      trainerName : "Obi-Wan Kenobi",
      endDate : new Date(Date.now()),
      startDate : new Date(Date.now()),
      progress : 67,
      rating : 4.2,
      technologyName : "HTML",
      timings : "09:30 AM - 11:30 AM",
      userName : "Anakin Skywalker"
    },
    {
      trainerName : "John Doe",
      endDate : new Date(Date.now()),
      startDate : new Date(Date.now()),
      progress : 100,
      rating : 4.2,
      technologyName : "Angular",
      timings : "09:30 AM - 11:30 AM",
      userName: "Lorem Ipsum"
    }
  ]

}
