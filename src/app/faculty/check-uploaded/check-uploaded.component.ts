import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-check-uploaded',
  templateUrl: './check-uploaded.component.html',
  styleUrls: ['./check-uploaded.component.css']
})
export class CheckUploadedComponent implements OnInit {
  checkUploadedAssignmentForm: FormGroup;
  fetchSubFailed = false;
  noAssignment = false;
  uploadedAssignmentList = false;
  noUploadedAssignments = false;
  assignmentList: Array<any> = [];
  studentList: Array<any> = [];
  subjectList: Array<any> = [];
  batchList: Array<any> = [];
  branchList: Array<any> = [];
  selectedModules: Array<any> = [];
  totalNumber = '';
  constructor(private checkUploadedAssignmentService: RegisterFacultyService) { }

  ngOnInit() {
    this.initCheckUploadAssignmentForm();
    this.getAllBatches();
    this.getAllBranches();
  }

  initCheckUploadAssignmentForm() {
    console.log('checkUploadedAssignmentForm()');
    this.checkUploadedAssignmentForm = new FormGroup({
      department: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      semseter: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      section: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      module: new FormControl('', Validators.required),
      assignmentName: new FormControl('', Validators.required),
    });
  }

  fetchSubjects() {
    console.log('fetchSubjects()');
    this.fetchSubFailed = false;
    this.subjectList = [];
    const departmentId = this.checkUploadedAssignmentForm.controls['department'].value;
    const batchId = this.checkUploadedAssignmentForm.controls['batch'].value;
    const semesterId = this.checkUploadedAssignmentForm.controls['semseter'].value;
    this.checkUploadedAssignmentService.fetchSubjects(departmentId, batchId, semesterId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.subjectList = response.Subjects;
      } else {
        this.fetchSubFailed = true;
      }
    });
  }

  getAllBranches() {
    this.checkUploadedAssignmentService.getAllBranches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.branchList = response.Branches;
    });
  }


  getAllBatches() {
    this.checkUploadedAssignmentService.getAllBatches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.batchList = response.Batches;
    });
  }

  showModule() {

    const that = this;
    that.selectedModules = [];
    const subId = this.checkUploadedAssignmentForm.controls['subject'].value;
    console.log('showModule() :', subId);
    for (let i = 0; i < this.subjectList.length; i++) {
      const Obj = this.subjectList[i];
      if (Obj.Id === subId) {
        const ar = Obj.ModuleIds.split(',');
        if (ar.length > 1) {
          for (let j = 0; j < ar.length; j++) {
            if (that.selectedModules.indexOf(ar[j]) < 0) {
              that.selectedModules.push(ar[j].replace(/[']/g, ''));
            }
          }
        }
        break;
      }
    }
  }

  showAssignment() {
    this.assignmentList = [];
    this.noAssignment = false;
    this.noUploadedAssignments = false;
    const branchId = this.checkUploadedAssignmentForm.controls['department'].value;
    const batchId = this.checkUploadedAssignmentForm.controls['batch'].value;
    const semesterId = this.checkUploadedAssignmentForm.controls['semseter'].value;
    const subjectId = this.checkUploadedAssignmentForm.controls['subject'].value;
    const section = this.checkUploadedAssignmentForm.controls['section'].value;
    const groupId = this.checkUploadedAssignmentForm.controls['group'].value;
    const moduleId = this.checkUploadedAssignmentForm.controls['module'].value;

    console.log('showAssignment()');
    console.log(subjectId, batchId, branchId, semesterId, section, groupId);
    this.checkUploadedAssignmentService.showAssignment(subjectId, batchId, branchId, semesterId, section, groupId, moduleId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.assignmentList = response.AssignmentList;
      } else {
        this.noAssignment = true;
      }
    });
  }
  checkUploads(formValue) {
    this.uploadedAssignmentList = false;
    this.noUploadedAssignments = false;
    this.studentList = [];
    this.checkUploadedAssignmentService.checkUploads(formValue).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.totalNumber = response.Totalnumber;
        this.studentList = response.AssignmentList;
        this.uploadedAssignmentList = true;
      } else {
        this.noUploadedAssignments = true;
      }
    });

  }

}
