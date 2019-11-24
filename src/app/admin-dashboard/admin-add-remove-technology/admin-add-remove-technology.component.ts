import { Component, OnInit, TemplateRef } from '@angular/core';
import { Technology } from '../models/Technology';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-add-remove-technology',
  templateUrl: './admin-add-remove-technology.component.html',
  styleUrls: ['./admin-add-remove-technology.component.css']
})
export class AdminAddRemoveTechnologyComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

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

  removeUser(i){
    this.technologyList.splice(i,1);
  }

  modalRef: BsModalRef;
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveTechnology(){
    this.technologyList.push(this.newTechnology);
  }

  newTechnology : Technology = {
    name : null,
    prerequisites : null,
    toc : null,
    fees : null
  }

  technologyList : Technology[] = [
    {
      name : "Angular",
      toc : "Templates, Components",
      prerequisites : "Javascript, Bootstrap",
      fees : 5000
    },
    {
      name : "HTML",
      toc : "Tags,Tables",
      prerequisites : "Web Page Knowledge",
      fees : 3000
    }
  ];
  
}
