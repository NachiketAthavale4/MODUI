import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training';

@Component({
  selector: 'app-mentor-notification',
  templateUrl: './mentor-notification.component.html',
  styleUrls: ['./mentor-notification.component.css']
})
export class MentorNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pendingList = this.technologyList.filter(x => x.status == "Pending");
    this.acceptedList = this.technologyList.filter(x => x.status == "Accepted");
    this.rejectedList = this.technologyList.filter(x => x.status == "Rejected");
  }

  pendingList : Training[];
  rejectedList : Training[];
  acceptedList : Training[];

  technologyList : Training[] = [
    {
      progress : null,
      rating : null,
      technologyName : "Angular",
      status : "Pending",
      startDate : new Date(Date.now()),
      endDate : new Date(Date.now()),
      trainerName : null,
      userName : "johnDoe94",
      timings : "9:30 AM - 11:30 AM"
    },
    {
      progress : null,
      rating : null,
      technologyName : "Bootstrap",
      status : "Accepted",
      startDate : new Date(Date.now()),
      endDate : new Date(Date.now()),
      trainerName : null,
      userName : "anakinskywalker22",
      timings : "9:30 AM - 11:30 AM"
    },
    {
      progress : null,
      rating : null,
      technologyName : "HTML5",
      status : "Rejected",
      startDate : new Date(Date.now()),
      endDate : new Date(Date.now()),
      trainerName : null,
      userName : "lukeowen76",
      timings : "9:30 AM - 11:30 AM"
    }
  ]

  addToRejectList(i) {
    this.rejectedList.push(this.pendingList[i]);
    this.pendingList.splice(i,1);
  }

  addToAcceptedList(i) {
    this.acceptedList.push(this.pendingList[i]);
    this.pendingList.splice(i,1);
  }

}
