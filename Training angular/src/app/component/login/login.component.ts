import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inter_api : string;
  ip_api : string;
  username : string;
  password : string;

  login_detail = {
    inter_api : '',
    ip_api : '',
    username : '',
    password : ''
  }

  status = {
    success : 's',
    fail : 'f'
  }

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  sendRequest(){
    this.login_detail.inter_api = this.inter_api;
    this.login_detail.ip_api = this.ip_api;
    this.login_detail.username = this.username;
    this.login_detail.password = this.password;
    console.log(this.login_detail)
    this.loginService.responseData(this.login_detail).subscribe(res =>{
      console.log(res)
       this.checkStatus(res); 
    })
      
  }


  checkStatus(data) {
    if (data.header.status == this.status.success) {
      console.log("Success");
    } else if (data.header.status == this.status.fail) {
      console.log("error");
    }
  }
}
