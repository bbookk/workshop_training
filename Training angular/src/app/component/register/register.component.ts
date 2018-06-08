import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
// import 'rxjs/add/operator/toPromise';
import { VariableComponent } from './../../variable.compoent'
import { RegisterService } from '../../services/register.service';
import { Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public type: string;
  public phone: string;
  public idCard: string;
  public accountNum: string;


  public reg_data = {
    IDType: "",
    IDValue: "",
    BankCode: "002",
    AccountID: "",
    AccountName: ""
  }

  constructor(private router: Router, private _var: VariableComponent,
    private registerService: RegisterService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  sendRequest() {
    this.reg_data.IDType = this.type;
    this.reg_data.IDValue = this.phone;
    this.reg_data.AccountID = this.idCard;
    this.reg_data.AccountName = this.accountNum;
    this.getData();
  }

  getData() {
    this.registerService.responseData(this.reg_data).subscribe(res => {
      console.log(res)
      // this.passValue(res)
    })
  }

  passValue() {
    // console.log(res)
    this._var.name = this.type;
    this.router.navigate(['/store']);
  }
}
