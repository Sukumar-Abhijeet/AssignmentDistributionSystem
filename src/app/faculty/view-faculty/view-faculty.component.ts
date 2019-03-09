import { Component, OnInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit {
  assignFaultyForm: FormGroup;
  batchList: Array<any> = [];
  branchList: Array<any> = [];
  subjectList: Array<any> = [];
  facultyList: Array<any> = [];
  departmentId = '';
  batchId = '';
  semesterId = '';
  oldFacultyId = '';
  noSubjectsLinked = false;
  assignSuccess = false;
  assignFailed = false;
  alreadyAssigned = false;
  changedFaculty = true;
  notChanged = false;
  constructor(private assignFacultyService: RegisterFacultyService) { }

  ngOnInit() {
    this.initAssignFaculty();
    this.getAllBatches();
    this.getAllBranches();
    this.getFacultyByBranch();
  }
  initAssignFaculty() {
    $('.changeFaculty').hide();
    $('.changeFaculty').attr('disabled', 'disable');
    // $('.assignFacultyBtn').removeAttr('disabled');
    console.log('initAssignFaculty()');
    this.assignFaultyForm = new FormGroup({
      department: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      semseter: new FormControl('', Validators.required),
      multipleSubjects: new FormControl('', Validators.required),
      faculty: new FormControl('', Validators.required)
    });
  }
  getAllBranches() {
    this.assignFacultyService.getAllBranches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.branchList = response.Branches;
    });
  }

  getAllBatches() {
    this.assignFacultyService.getAllBatches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.batchList = response.Batches;
    });
  }


  fetchSubjects() {
    this.noSubjectsLinked = false;

    this.departmentId = this.assignFaultyForm.controls['department'].value;
    this.batchId = this.assignFaultyForm.controls['batch'].value;
    this.semesterId = this.assignFaultyForm.controls['semseter'].value;

    this.assignFacultyService.fetchSubjects(this.departmentId, this.batchId, this.semesterId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.subjectList = response.Subjects;
      } else {
        this.noSubjectsLinked = true;
      }
    });
  }

  getFacultyByBranch() {

    $('.changeFaculty').hide();
    this.assignSuccess = false;
    this.assignFailed = false;
    this.alreadyAssigned = false;
    this.changedFaculty = false;
    this.notChanged = false;
    const branchId = this.assignFaultyForm.controls['department'].value;
    if (branchId === '') {
      console.log('select A Branch');
    } else {
      this.assignFacultyService.getFacultyByBranch(branchId).subscribe((response: any) => {
        response = response.json();
        console.log(response);
        this.facultyList = response.Faculties;
      });
    }

  }
  assignFaculty(formValue) {
    this.assignSuccess = false;
    this.assignFailed = false;
    this.alreadyAssigned = false;
    this.changedFaculty = false;
    this.notChanged = false;
    formValue.change = 'NO';
    this.oldFacultyId = this.assignFaultyForm.controls['faculty'].value;
    this.assignFacultyService.assignFaculty(formValue).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.assignSuccess = true;
        this.assignFaultyForm.reset();
      } else if (response.Success === 'EX') {
        $('.assignFacultyBtn').attr('disabled', 'disable');
        $('.changeFaculty').attr('disabled', 'disable');
        this.alreadyAssigned = true;
        $('.changeFaculty').show();
        // this.assignFaultyForm.reset();
      } else {
        this.assignFailed = false;
      }
    });
  }
  newFaculty() {
    // if (this.oldFacultyId !== this.assignFaultyForm.controls['faculty'].value) {
    //   $('.changeFaculty').removeAttr('disabled');
    // }

  }

  changeFaculty(formValue) {
    formValue.change = 'YES';
    this.changedFaculty = false;
    this.notChanged = false;
    formValue.oldFacultyId = this.oldFacultyId;
    console.log(formValue);
    this.assignFacultyService.changeFaculty(formValue).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.changedFaculty = true;
        this.assignFaultyForm.reset();
      } else {
        this.notChanged = true;
      }
    });
  }
}
