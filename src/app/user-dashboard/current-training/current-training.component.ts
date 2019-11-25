import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enableEdit = false;
  enableEditIndex = null;

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
  }

  saveSegment(){
    this.enableEditIndex = null;
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
      status : null,
      technology : null,
      commission : null
    },
    {
      trainerName : "John Doe",
      endDate : new Date(Date.now()),
      startDate : new Date(Date.now()),
      progress : 100,
      rating : 4.2,
      technologyName : "Angular",
      timings : "09:30 AM - 11:30 AM",
      status : null,
      technology : null,
      commission : null
    }
  ]

}
