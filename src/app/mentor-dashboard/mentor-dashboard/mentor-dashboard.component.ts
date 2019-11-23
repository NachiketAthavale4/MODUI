import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.css']
})
export class MentorDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  collapsed : boolean = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
