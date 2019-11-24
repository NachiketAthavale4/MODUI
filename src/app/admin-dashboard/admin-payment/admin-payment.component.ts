import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../models/user-entity';
import { UserPayment } from '../models/user-payment';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {

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

  userList : UserPayment[] = [
    {
      UserName : "idontthinkso34",
      Status : "Done",
      TechnologyName : "Angular",
      Fees : 5000,
      Commission : null
    },
    {
      UserName : "frommypointofview",
      Status : "Done",
      TechnologyName : "Bootstrap",
      Fees : 3000,
      Commission : null
    },
  ]

  trainerList : UserPayment[] = [
    {
      UserName : "idontthinkso34",
      Status : "Done",
      TechnologyName : "Angular",
      Fees : 5000,
      Commission : 1000
    },
    {
      UserName : "frommypointofview",
      Status : "Done",
      TechnologyName : "Bootstrap",
      Fees : 3000,
      Commission : 500
    },
  ]

}
