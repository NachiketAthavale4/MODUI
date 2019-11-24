import { Component, OnInit } from '@angular/core';
import { UserPayment } from '../models/user-payment';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  paymentList : UserPayment[] = [
    {
      TechnologyName : "Angular",
      Status : "Done",
      Tax : 1000,
      Fees : 6000
    },
    {
      TechnologyName : "Bootstrap",
      Status : "Pending",
      Tax : 600,
      Fees : 4000
    }
  ];

}
