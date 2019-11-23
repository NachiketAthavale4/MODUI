import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  technologyName : string = "HTML";
  technologyFees : number = 5000;
  technologyToc : string = "Tags, Headings, Title";
  technologyPrerequisites : string = "Basic Web Page knowledge";

  

}
