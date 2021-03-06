import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Global } from '../global';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    checkLoginAction(formValue: any): Observable<Response> {
        let body = '';
        for (const key in formValue) {
            if (formValue.hasOwnProperty(key)) {

                if (body === '') {
                    body += key + '=' + formValue[key];
                } else {
                    body += '&' + key + '=' + formValue[key];
                }

            }
        }
        console.log('body in service: ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.LOGIN_URL, body, options);
    }
}
