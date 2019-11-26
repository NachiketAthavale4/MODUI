import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchItem : string = null;

  collapsed : boolean = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  

  onSubmit(form : NgForm){

  }
  

}
