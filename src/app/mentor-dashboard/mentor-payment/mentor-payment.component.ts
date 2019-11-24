import { Component, OnInit, TemplateRef } from '@angular/core';
import { MentorPayment } from '../models/payment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mentor-payment',
  templateUrl: './mentor-payment.component.html',
  styleUrls: ['./mentor-payment.component.css']
})
export class MentorPaymentComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  modalRef: BsModalRef;
 
  openModal(template: TemplateRef<any>,i) {
    this.setWithdrawObj(i);
    this.modalRef = this.modalService.show(template);
  }

  setWithdrawObj(i){
    this.withdrawPayment = this.paymentList[i];
  }

  withdrawClicked : boolean = false;

  onWithDrawClicked() {
    this.withdrawClicked = true;
  }

  withdrawPayment : MentorPayment = {
    commission: null,
    fees : null,
    training : null
  };

  paymentList : MentorPayment[] = [
    {
      commission: 1000,
      fees : 6000,
      training : {
        userName : "johnDoe32",
        progress : 25,
        technologyName : "Angular",
        endDate : null,
        rating : null,
        startDate : null,
        timings : null,
        trainerName : null,
        status : null
      }
    },
    {
      commission: 500,
      fees : 4000,
      training : {
        userName : "johnwillian93",
        progress : 75,
        technologyName : "Bootstrap",
        endDate : null,
        rating : null,
        startDate : null,
        timings : null,
        trainerName : null,
        status : null
      }
    }
  ];

}
