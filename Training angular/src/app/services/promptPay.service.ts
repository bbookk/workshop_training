import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PromptPayService {
    constructor(private http: HttpClient) {
    }

    deleteData(aipId) {
        let url = "http://localhost:8090/orcsoft/v1/callPromptApi/deletePromptPay/"+aipId;
        return this.http.delete(url).toPromise();
    }

    getPromptPay(type, value){
        let url = "http://localhost:8090/orcsoft/v1/callPromptApi/getPromptPayDetail?type="+type+"&value="+value;
        return this.http.get(url).toPromise();
    }

}
