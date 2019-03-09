import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Global } from '../global';

@Injectable()
export class StudentService {

    constructor(private http: Http) { }

    fetchSubjects(studentId: any): Observable<Response> {
        console.log(studentId);
        const body = 'studentId=' + studentId;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.FETCH_STUDENT_SUBJECTS_URL, body, options);
    }


    showAssignment(subjectId, batchId, branchId, semesterId, section, groupId, moduleId): Observable<Response> {
        const body = 'subjectId=' + subjectId + '&batchId=' + batchId + '&branchId=' + branchId + '&semesterId=' + semesterId + '&section=' + section + '&groupId=' + groupId + '&moduleId=' + moduleId;

        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.FETCH_STUDENT_ASSIGNMENT_URL, body, options);
    }

    setDownload(assignmentId, studentId): Observable<Response> {
        const body = 'assignmentId=' + assignmentId + '&studentId=' + studentId;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.SET_DOWNLOAD_LOG_URL, body, options);
    }

    checkUpload(studentId, assignmentId): Observable<Response> {
        const body = 'assignmentId=' + assignmentId + '&studentId=' + studentId;
        console.log('checkUpload', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.CHECK_UPLOAD_LOG_URL, body, options);
    }
    fileTransfer(formValue): Observable<Response> {
        const body = JSON.stringify(formValue);
        console.log('fileTransfer(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.UPLOAD_STUDENT_ASSIGNMENT_FILE_URL, body, options);
    }

    uploadAssignmentDb(formValue): Observable<Response> {
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
        console.log('assignAssignment(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.UPLOAD_STUDENT_ASSIGNMENT_DB_URL, body, options);

    }

}
