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
      Tax : null,
      Fees : 6000,
      MentorFees : null,
      TransactionType : null
    },
    {
      TechnologyName : "Bootstrap",
      Status : "Pending",
      Tax : null,
      Fees : 4000,
      MentorFees : null,
      TransactionType : null
    }
  ];

}
