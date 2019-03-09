import { Component, OnInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-assign-assignment',
  templateUrl: './assign-assignment.component.html',
  styleUrls: ['./assign-assignment.component.css']
})
export class AssignAssignmentComponent implements OnInit {
  assignAssignmentForm: FormGroup;
  constructor(private assignAssignmentService: RegisterFacultyService) { }
  branchList: Array<any> = [];
  batchList: Array<any> = [];
  subjectList: Array<any> = [];
  selectedModules: Array<any> = [];
  fetchSubFailed = false;
  assignmentFile: any = null;
  noFile = false;
  fileUploadFailed = false;
  assignmentUploadSuccess = false;
  ngOnInit() {
    this.initAssignAssignmentForm();
    this.getAllBatches();
    this.getAllBranches();
  }

  initAssignAssignmentForm() {
    console.log('initAssignAssignmentForm()');
    this.assignAssignmentForm = new FormGroup({
      department: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      semseter: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      section: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      module: new FormControl('', Validators.required),
      assignmentName: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
    });
    $('input.assignmentFile').val(null);
  }

  getAllBranches() {
    this.assignAssignmentService.getAllBranches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.branchList = response.Branches;
    });
  }


  getAllBatches() {
    this.assignAssignmentService.getAllBatches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.batchList = response.Batches;
    });
  }

  fetchSubjects() {
    console.log('fetchSubjects()');
    this.fetchSubFailed = false;
    this.subjectList = [];
    const departmentId = this.assignAssignmentForm.controls['department'].value;
    const batchId = this.assignAssignmentForm.controls['batch'].value;
    const semesterId = this.assignAssignmentForm.controls['semseter'].value;
    this.assignAssignmentService.fetchSubjects(departmentId, batchId, semesterId).subscribe((response: any) => {
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
    const subId = this.assignAssignmentForm.controls['subject'].value;
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
  detectFile(event: any) {
    this.assignmentFile = null;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.assignmentFile = {
          filename: file.name,
          filetype: file.type,
          value: (<string>reader.result).split(',')[1]
        };
      };
    }
  }

  assignAssignment(formValue) {
    this.noFile = false;
    this.assignmentUploadSuccess = false;
    this.fileUploadFailed = false;
    if (this.assignmentFile === null) {
      this.noFile = true;
    } else {
      formValue.assignmentFile = this.assignmentFile;
      this.assignAssignmentService.uploadFile(formValue).subscribe((response: any) => {
        response = response.json();
        console.log(response);
        if (response.Success === 'Y') {
          const uploadedFilename = response.Filename;
          console.log(uploadedFilename);
          delete formValue['assignmentFile'];
          console.log('Checking', formValue);
          const userId = localStorage.getItem('userId');
          formValue.assignmentFile = uploadedFilename;
          formValue.userId = userId;
          console.log('User ID :', userId);
          this.assignAssignmentService.assignAssignment(formValue).subscribe((responseJsp: any) => {
            responseJsp = responseJsp.json();
            console.log(responseJsp);
            if (responseJsp.Success === 'Y') {
              this.assignmentUploadSuccess = true;
              this.assignAssignmentForm.reset();
            } else {
              this.fileUploadFailed = true;
            }
          });
        } else {
          this.fileUploadFailed = true;
        }
      });

    }

  }

}
