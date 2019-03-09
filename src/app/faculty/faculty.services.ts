import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Global } from '../global';

@Injectable()
export class RegisterFacultyService {

    constructor(private http: Http) { }

    getAllBranches() {
        console.log('getAllBranches()');
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALL_BRANCHES_URL, options);
    }
    facultyRegistration(formValue: any): Observable<Response> {

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
        return this.http.post(Global.REGISTER_FACULTY, body, options);
    }
    checkMobNumber(mobnumber: any): Observable<Response> {
        console.log(mobnumber);
        const body = 'mobnumber=' + mobnumber;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.CHECK_FACULTY_MOBNUMBER_URL, body, options);
    }
    subjectAddition(formValue: any): Observable<Response> {
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
        console.log('subjectAddition(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ADD_SUBJECT, body, options);
    }
    showStudentList(): Observable<Response> {
        console.log('showStudentList ()');
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.NEW_REGISTERED_STUDENTS_URL, options);
    }
    activateStudent(data): Observable<Response> {
        console.log('showStudentList ()');
        const body = 'regNo=' + data;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALLOW_NEW_REGISTERED_STUDENTS, body, options);
    }
    getAllBatches(): Observable<Response> {
        console.log('getAllBatches()');
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALL_BATCHES_URL, options);
    }
    getAllSubjects(): Observable<Response> {
        console.log('getAllSubjects');
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALL_SUBJECTS_URL, options);
    }
    linkSubjects(formValue): Observable<Response> {
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
        console.log('subjectAddition(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.LINK_SUBJECTS_URL, body, options);
    }
    fetchLinkModules(departmentId, batchId, semseterId): Observable<Response> {
        const body = 'departmentId=' + departmentId + '&' + 'batchId=' + batchId + '&' + 'semester=' + semseterId;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.FETCH_MODULES_URL, body, options);
    }
    addModules(formValue, semSubId): Observable<Response> {
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
        body += '&semSubId=' + semSubId;
        console.log('addModules(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ADD_MODULES_URL, body, options);
    }

    fetchSubjects(department, batch, semester): Observable<Response> {

        const body = 'departmentId=' + department + '&batchId=' + batch + '&semester=' + semester;
        console.log('fetchSubjects(Data): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.FETCH_SUBJECT_MODULES_URL, body, options);
    }
    assignAssignment(formValue): Observable<Response> {
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
        return this.http.post(Global.ASSIGN_ASSIGNMENT_URL, body, options);
    }
    fetchfaculties(): Observable<Response> {
        console.log('fetchfaculties()');
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALL_FACULTIES_URL, options);
    }

    assignAdmin(facultyId): Observable<Response> {
        const body = 'facultyId=' + facultyId;
        console.log('assignAdmin(facultyId): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ASSIGN_TEMP_ADMIN_URL, body, options);
    }

    fetchAdminFaculties(): Observable<Response> {
        console.log('fetchAdminFaculties()');
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALL_ADMIIN_FACULTIES_URL, options);
    }

    removeAdmin(facultyId): Observable<Response> {
        const body = 'facultyId=' + facultyId;
        console.log('removeAdmin(facultyId): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.REMOVE_TEMP_ADMIN_URL, body, options);
    }

    getFacultyByBranch(branchId): Observable<Response> {
        const body = 'branchId=' + branchId;
        console.log('getFacultyByBranch(branchId): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.GET_FACULTY_BY_BRANCH_URL, body, options);
    }

    uploadFile(formValue): Observable<Response> {
        const body = JSON.stringify(formValue);
        console.log('uploadFile: ', body);
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.UPLOAD_ASSIGNMENT_FILE_URL, body, options);
    }
    showAssignment(subjectId, batchId, branchId, semesterId, section, groupId, moduleId): Observable<Response> {
        const body = 'subjectId=' + subjectId + '&batchId=' + batchId + '&branchId=' + branchId + '&semesterId=' + semesterId + '&section=' + section + '&groupId=' + groupId + '&moduleId=' + moduleId;
        console.log(body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.CHECK_STUDENT_ASSIGNMENT_URL, body, options);
    }

    checkUploads(formValue): Observable<Response> {
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
        console.log('checkUploads(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.FETCH_SUBMITTED_ASSIGNMENT_URL, body, options);
    }

    checkDownloads(formValue): Observable<Response> {
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
        console.log('checkDownloads(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.FETCH_DOWNLOADED_ASSIGNMENT_URL, body, options);
    }



    fetchAllSubjects(): Observable<Response> {
        console.log('fetchAllSubjects()');
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ALL_SUBJECTS_URL, options);
    }

    assignFaculty(formValue): Observable<Response> {
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
        console.log('assignFaculty(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ASSIGN_SUBJECT_TO_FACULTY_URL, body, options);

    }

    changeFaculty(formValue): Observable<Response> {

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
        console.log('assignFaculty(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.ASSIGN_SUBJECT_TO_FACULTY_URL, body, options);

    }

    checkSubject(formValue): Observable<Response> {
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
        console.log('assignFaculty(formValue): ', body);
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(Global.GET_ASSIGNED_SUBJECT_URL, body, options);
    }
}
