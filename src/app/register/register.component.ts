import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    branchList: Array<any> = [];
    studentRegistrationForm: FormGroup;
    regValid = false;
    regSuccess = false;
    regFailed = false;

    constructor(private regService: RegisterService) {


    }

    ngOnInit() {
        this.getAllBranches();
        this.initStudentRegistration();
    }

    getAllBranches() {
        this.regService.getAllBranches().subscribe((response: any) => {
            response = response.json();
            console.log(response);
            this.branchList = response.Branches;
        });

    }
    initStudentRegistration() {
        console.log('initStudentRegistration()');
        this.studentRegistrationForm = new FormGroup({
            studentName: new FormControl('', Validators.required),
            registrationNumber: new FormControl('', Validators.required),
            branchId: new FormControl('', Validators.required),
            semesterId: new FormControl('', Validators.required),
            sectionName: new FormControl('', Validators.required),
            groupNumber: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            number: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            agreeTerm: new FormControl('', Validators.required)
        });


    }
    checkRegNumber() {
        this.regValid = false;
        const regnumber = this.studentRegistrationForm.controls['registrationNumber'].value;
        console.log('checkRegNumber()', regnumber);
        this.regService.checkRegNumber(regnumber).subscribe((response: any) => {
            response = response.json();
            if (response.Success === 'Y') {
                this.regValid = true;
            }
            console.log('response', response.Success);
        });
    }
    studentRegistration(formValue) {
        this.regSuccess = false;
        this.regFailed = false;
        console.log(formValue);
        this.regService.studentRegistration(formValue).subscribe((response: any) => {
            response = response.json();
            console.log('response', response);
            if (response.Success === 'Y') {
                this.studentRegistrationForm.reset();
                this.regSuccess = true;
            } else {
                this.regFailed = true;
            }
        });
    }

}


