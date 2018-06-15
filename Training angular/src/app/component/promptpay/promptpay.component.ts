import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PromptPayService } from '../../services/promptPay.service';

@Component({
  selector: 'app-promptpay',
  templateUrl: './promptpay.component.html',
  styleUrls: ['./promptpay.component.css']
})
export class PromptpayComponent implements OnInit {

  type: string = 'mobile';
  value: string = '0819248388'
  AIPID: string
  constructor(private _flashMessagesService: FlashMessagesService, private promptPayService: PromptPayService) { }

  ngOnInit() {
  }

  show() {
    this.promptPayService.getPromptPay(this.type, this.value).then((response: any) => {
      this.AIPID = response.AIPID;
      console.log(this.AIPID)
      this.promptPayService.deleteData(this.AIPID).then(resp => {
  
      })
    })


    this._flashMessagesService.show('Delete PromptPay Success', { cssClass: 'alert-success', timeout: 3000 });
  }

}
