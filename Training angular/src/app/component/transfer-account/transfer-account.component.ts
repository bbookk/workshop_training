import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-account',
  templateUrl: './transfer-account.component.html',
  styleUrls: ['./transfer-account.component.css']
})
export class TransferAccountComponent implements OnInit {

  constructor() { }

  from : any;
  to : any;
  amount : any;
  show : boolean = false;

  data_transfer = {
    from : '',
    to : '',
    amount : ''
  }

  ngOnInit() {
  }

  getDataTransfer(){
    this.show = true;
    this.data_transfer.from = this.from;
    this.data_transfer.to = this.to;
    this.data_transfer.amount = this.amount;
    console.log(this.data_transfer);
  }

}
