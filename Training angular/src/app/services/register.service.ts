import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestMethod, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) {
    }

    responseData(reg_data) {
        let url = "http://localhost:8090/orcsoft/swagger-ui.html#!/call-rest-api-controller/postRegistPromptPay";
        let body = JSON.stringify({
            IDType: reg_data.IDType,
            IDValue: reg_data.IDValue,
            BankCode: "002",
            AccountID: reg_data.AccountID,
            AccountName: reg_data.AccountName
        });

        return this.http.post(url, body,  {
            headers:new HttpHeaders()
            .set('Content-Type','application/json')
            });
        }
}
