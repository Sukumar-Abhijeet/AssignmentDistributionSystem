import { Component, OnInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-faculty',
  templateUrl: './register-faculty.component.html',
  styleUrls: ['./register-faculty.component.css']
})
export class RegisterFacultyComponent implements OnInit {
  branchList: Array<any> = [];
  facultyRegistrationForm: FormGroup;
  regSuccess = false;
  regFailed = false;
  regValid = false;
  constructor(private facultyRegService: RegisterFacultyService) { }

  ngOnInit() {
    this.getBranchList();
    this.initFacultyRegistration();
  }
  getBranchList() {
    this.facultyRegService.getAllBranches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.branchList = response.Branches;
    });
  }
  initFacultyRegistration() {
    console.log('initFacultyRegistration()');
    this.facultyRegistrationForm = new FormGroup({
      facultyName: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }

  facultyRegistration(formValue) {
    console.log(formValue);
    this.regSuccess = false;
    this.regFailed = false;
    this.facultyRegService.facultyRegistration(formValue).subscribe((response: any) => {
      response = response.json();
      console.log('response', response);
      if (response.Success === 'Y') {
        this.facultyRegistrationForm.reset();
        this.regSuccess = true;

      } else {
        this.regFailed = true;
      }
    });

  }
  checkMobNumber() {
    this.regValid = false;
    const mobnumber = this.facultyRegistrationForm.controls['number'].value;
    console.log('checkmobnumber()', mobnumber);
    this.facultyRegService.checkMobNumber(mobnumber).subscribe((response: any) => {
      response = response.json();
      if (response.Success === 'Y') {
        this.regValid = true;
      }
      console.log('response', response.Success);
    });
  }
}
