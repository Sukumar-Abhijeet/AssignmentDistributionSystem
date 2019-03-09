import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-check-downloaded',
  templateUrl: './check-downloaded.component.html',
  styleUrls: ['./check-downloaded.component.css']
})
export class CheckDownloadedComponent implements OnInit {
  checkDownloadedAssignmentForm: FormGroup;
  branchList: Array<any> = [];
  batchList: Array<any> = [];
  subjectList: Array<any> = [];
  selectedModules: Array<any> = [];
  assignmentList: Array<any> = [];
  studentList: Array<any> = [];
  fetchSubFailed = false;
  noAssignment = false;
  noUploadedAssignments = false;
  downloadedAssignmentList = false;
  noDownloadedAssignments = false;
  totalNumber = '';
  constructor(private checkDownloadedAssignmentService: RegisterFacultyService) { }

  ngOnInit() {
    this.initCheckDownloadAssignmentForm();
    this.getAllBatches();
    this.getAllBranches();
  }

  initCheckDownloadAssignmentForm() {
    console.log('initCheckDownloadAssignmentForm()');
    this.checkDownloadedAssignmentForm = new FormGroup({
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
  getAllBranches() {
    this.checkDownloadedAssignmentService.getAllBranches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.branchList = response.Branches;
    });
  }


  getAllBatches() {
    this.checkDownloadedAssignmentService.getAllBatches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.batchList = response.Batches;
    });
  }

  fetchSubjects() {
    console.log('fetchSubjects()');
    this.fetchSubFailed = false;
    this.subjectList = [];
    const departmentId = this.checkDownloadedAssignmentForm.controls['department'].value;
    const batchId = this.checkDownloadedAssignmentForm.controls['batch'].value;
    const semesterId = this.checkDownloadedAssignmentForm.controls['semseter'].value;
    this.checkDownloadedAssignmentService.fetchSubjects(departmentId, batchId, semesterId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.subjectList = response.Subjects;
      } else {
        this.fetchSubFailed = true;
      }
    });
  }

  showModule() {

    const that = this;
    that.selectedModules = [];
    const subId = this.checkDownloadedAssignmentForm.controls['subject'].value;
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
    const branchId = this.checkDownloadedAssignmentForm.controls['department'].value;
    const batchId = this.checkDownloadedAssignmentForm.controls['batch'].value;
    const semesterId = this.checkDownloadedAssignmentForm.controls['semseter'].value;
    const subjectId = this.checkDownloadedAssignmentForm.controls['subject'].value;
    const section = this.checkDownloadedAssignmentForm.controls['section'].value;
    const groupId = this.checkDownloadedAssignmentForm.controls['group'].value;
    const moduleId = this.checkDownloadedAssignmentForm.controls['module'].value;

    console.log('showAssignment()');
    console.log(subjectId, batchId, branchId, semesterId, section, groupId);
    this.checkDownloadedAssignmentService.showAssignment(subjectId, batchId, branchId, semesterId, section, groupId, moduleId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.assignmentList = response.AssignmentList;
      } else {
        this.noAssignment = true;
      }
    });
  }

  checkDownloads(formValue) {
    this.downloadedAssignmentList = false;
    this.noDownloadedAssignments = false;
    this.studentList = [];
    this.checkDownloadedAssignmentService.checkDownloads(formValue).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.totalNumber = response.Totalnumber;
        this.studentList = response.AssignmentList;
        this.downloadedAssignmentList = true;
      } else {
        this.noDownloadedAssignments = true;
      }
    });


  }

}
