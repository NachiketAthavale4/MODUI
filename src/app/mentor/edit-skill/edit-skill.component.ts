import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  constructor() { }

  skillSet : any[] = [
    "C#",
    "Angular",
    "ASP.NET Core"
  ];

  ngOnInit() {
  }

}
