import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) {
    }

    responseData(reg_data) {
        let url = "http://alws-orcsoft.mockable.io/InterBank/any-id";
        let body = JSON.stringify({
            IDType: reg_data.IDType,
            IDValue: reg_data.IDValue,
            BankCode: "002",
            AccountID: reg_data.AccountID,
            AccountName: reg_data.AccountName
        });
        return this.http.post(url, body)
    }

    getData() {
        return this.http.get('http://192.168.9.154:8090/interbank/any-id/?type=mobile&value=0819248388').toPromise();
    }

}
