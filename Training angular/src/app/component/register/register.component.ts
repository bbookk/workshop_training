import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import 'rxjs/add/operator/toPromise';
import { VariableComponent } from './../../variable.compoent'
import { RegisterService } from '../../services/register.service';
import { Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public type: string = 'mobile';
  // public phone: string;
  public idValue: string;
  public accountName: string;
  public bankCode: string;

  public typeValue: string = 'mobile';


  public reg_data = {
    IDType: "",
    IDValue: "",
    BankCode: "",
    AccountID: "000-0-111111-0",
    AccountName: ""
  }

  constructor(private router: Router, private _var: VariableComponent,
    private registerService: RegisterService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  sendRequest() {
    this.reg_data.IDType = this.type;
    this.reg_data.IDValue = this.idValue;
    this.reg_data.BankCode = this.bankCode;
    this.reg_data.AccountName = this.accountName;
    console.log(this.reg_data)
    this.getData();
  }

  getData() {
    this.registerService.responseData(this.reg_data).subscribe(res => {
      console.log('res ',res)
      // this.passValue(res)
    })
  }

  passValue() {
    // console.log(res)
    this._var.name = this.type;
    this.router.navigate(['/store']);
  }
}
