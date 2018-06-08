import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {
    }

    responseData(login_detail) {
        let url = "https://demo3653135.mockable.io/checkLogin";
        let body = JSON.stringify({
            username : login_detail.username,
            password : login_detail.password,
        });
        return this.http.post(url, body)
    }
}
