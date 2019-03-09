import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Global } from '../global';

@Injectable()
export class RegisterService {

    constructor(private http: Http) { }

    getAllBranches() {
        console.log('getAllBranches()');
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALL_BRANCHES_URL, options);
    }
    checkRegNumber(regnumber: any): Observable<Response> {
        console.log(regnumber);
        const body = 'regNumber=' + regnumber;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.CHECK_REGNUMBER_URL, body, options);
    }

    studentRegistration(formValue: any): Observable<Response> {

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
        console.log('studentRegistration(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.REGISTER_STUDENT, body, options);
    }

}
