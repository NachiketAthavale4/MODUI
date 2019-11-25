import { Component, OnInit, TemplateRef } from '@angular/core';
import { Training } from '../models/training';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserPayment } from '../models/user-payment';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.pendingList = this.trainingList.filter(x => x.status == "Pending");
    this.acceptedList = this.trainingList.filter(
      x => x.status == "Accepted" || x.status == "PaymentDone");
    this.rejectedList = this.trainingList.filter(x => x.status == "Rejected");
  }

  trainingIndex : number;
  modalRef: BsModalRef;
 
  openModal(template: TemplateRef<any>,i) {
    this.newTraining = this.acceptedList[i];
    this.payment.Fees = this.newTraining.technology.fees;
    this.payment.TechnologyName = this.newTraining.technology.name;
    this.payment.MentorFees = this.payment.Fees - this.newTraining.commission;
    console.log(this.newTraining.technology.fees);
    console.log(this.newTraining.technology.name);
    this.SavePayment(this.payment);
    this.trainingIndex = i;
    this.modalRef = this.modalService.show(template);
  }

  makePayment(i) {
    this.acceptedList[this.trainingIndex].status = "PaymentDone";
  }

  SavePayment(paymentTransaction : UserPayment){

  }

  newTraining : Training = {
    progress : null,
    rating : null,
    technologyName : null,
    status : null,
    startDate : null,
    endDate : null,
    trainerName : null,
    timings : null,
    technology : null,
    commission : null
  }

  payment : UserPayment = {
    Status : null,
    Fees : null,
    MentorFees : null,
    Tax : null,
    TechnologyName : null,
    TransactionType : null
  };

  pendingList : Training[];
  rejectedList : Training[];
  acceptedList : Training[];

  trainingList : Training[] = [
    {
      progress : null,
      rating : null,
      technologyName : "Angular",
      status : "Pending",
      startDate : new Date(Date.now()),
      endDate : new Date(Date.now()),
      trainerName : "JohnConnor",
      timings : "9:30 AM - 11:30 AM",
      technology : {
        name : "Angular",
        prerequisites : null,
        toc : null,
        fees : 6000
      },
      commission : 1000
    },
    {
      progress : null,
      rating : null,
      technologyName : "Bootstrap",
      status : "Accepted",
      startDate : new Date(Date.now()),
      endDate : new Date(Date.now()),
      trainerName : "Obi-Wan",
      timings : "9:30 AM - 11:30 AM",
      technology : {
        name : "Bootstrap",
        prerequisites : null,
        toc : null,
        fees : 3000
      },
      commission : 1000
    },
    {
      progress : null,
      rating : null,
      technologyName : "HTML5",
      status : "Rejected",
      startDate : new Date(Date.now()),
      endDate : new Date(Date.now()),
      trainerName : "John Cena",
      timings : "9:30 AM - 11:30 AM",
      technology : {
        name : "HTML5",
        prerequisites : null,
        toc : null,
        fees : 2000
      },
      commission : 1000
    },
    {
      progress : null,
      rating : null,
      technologyName : "CSS",
      status : "PaymentDone",
      startDate : new Date(Date.now()),
      endDate : new Date(Date.now()),
      trainerName : "John Doe",
      timings : "9:30 AM - 11:30 AM",
      technology : {
        name : "CSS",
        prerequisites : null,
        toc : null,
        fees : 2000
      },
      commission : 1000
    }
  ]

}
