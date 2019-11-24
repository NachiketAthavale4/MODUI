import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training';

@Component({
  selector: 'app-completed-training',
  templateUrl: './completed-training.component.html',
  styleUrls: ['./completed-training.component.css']
})
export class CompletedTrainingComponent implements OnInit {

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
      userName : "Anakin Skywalker",
      status : null
    },
    {
      trainerName : "John Doe",
      endDate : new Date(Date.now()),
      startDate : new Date(Date.now()),
      progress : 100,
      rating : 4.2,
      technologyName : "Angular",
      timings : "09:30 AM - 11:30 AM",
      userName: "Lorem Ipsum",
      status : null
    }
  ]

}
