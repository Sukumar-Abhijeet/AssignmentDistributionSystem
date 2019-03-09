import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.services';
declare var $: any;

@Component({
  selector: 'app-upload-assignment',
  templateUrl: './upload-assignment.component.html',
  styleUrls: ['./upload-assignment.component.css']
})
export class UploadAssignmentComponent implements OnInit {

  constructor(private uploadAssignmentService: StudentService) { }
  UploadAssignmentForm: FormGroup;
  noSubject = false;
  noAssignment = false;
  noFile = false;
  fileUploadFailed = false;
  assignmentUploadSuccess = false;
  alreadyUploaded = false;
  subjectList: Array<any> = [];
  selectedModules: Array<any> = [];
  assignmentList: Array<any> = [];
  studentId = '';
  batchId = '';
  branchId = '';
  semesterId = '';
  section = '';
  groupId = '';
  assignmentFile: any = '';

  ngOnInit() {
    this.fetchSubjects();
    this.initUploadAssignment();
  }


  fetchSubjects() {
    this.noSubject = false;
    this.studentId = localStorage.getItem('userId');
    this.uploadAssignmentService.fetchSubjects(this.studentId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.subjectList = response.Subjects;
        this.batchId = response.BatchId;
        this.branchId = response.BranchId;
        this.semesterId = response.SemesterId;
        this.section = response.Section;
        this.groupId = response.GroupId;

      } else {
        this.noSubject = true;
      }
    });
  }


  initUploadAssignment() {
    console.log('initUploadAssignment()');
    this.UploadAssignmentForm = new FormGroup({
      subjects: new FormControl('', Validators.required),
      module: new FormControl('', Validators.required),
      assignment: new FormControl('', Validators.required),
    });
  }


  showModule() {
    this.assignmentUploadSuccess = false;
    const that = this;
    that.selectedModules = [];
    const subId = this.UploadAssignmentForm.controls['subjects'].value;
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
    this.noAssignment = false;
    const subjectId = this.UploadAssignmentForm.controls['subjects'].value;
    const moduleId = this.UploadAssignmentForm.controls['module'].value;
    console.log(subjectId, this.batchId, this.branchId, this.semesterId, this.section, this.groupId);
    this.uploadAssignmentService.showAssignment(subjectId, this.batchId, this.branchId, this.semesterId, this.section, this.groupId, moduleId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.assignmentList = response.AssignmentList;
      } else {
        this.noAssignment = true;
      }
    });
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
  UploadAssignment(formValue) {
    console.log('UploadAssignment()');
    this.noFile = false;
    this.alreadyUploaded = false;
    this.assignmentUploadSuccess = false;

    if (this.assignmentFile === null) {
      this.noFile = true;
    } else {
      const assignmentId = this.UploadAssignmentForm.controls['assignment'].value;
      this.uploadAssignmentService.checkUpload(this.studentId, assignmentId).subscribe((response: any) => {
        response = response.json();
        console.log(response);
        if (response.Success === 'Y') {
          this.fileTransfer(formValue);
        } else {
          this.alreadyUploaded = true;
        }
      });
    }

  }
  fileTransfer(formValue) {
    this.fileUploadFailed = false;
    console.log('FileTransfer');
    formValue.assignmentFile = this.assignmentFile;
    formValue.assignmentName = this.studentId + $('#fileName option:selected').attr('data-name');
    console.log(formValue);
    this.uploadAssignmentService.fileTransfer(formValue).subscribe((response: any) => {
      response = response.json();
      if (response.Success === 'Y') {
        const uploadedFilename = response.Filename;
        this.uploadAssignmentDb(formValue, uploadedFilename);
      } else {
        this.fileUploadFailed = true;
      }
      console.log(response);
    });

  }
  uploadAssignmentDb(formValue, fileName) {
    this.fileUploadFailed = false;
    this.assignmentUploadSuccess = false;
    console.log('uploadAssignmentDb');
    delete formValue['assignmentFile'];
    formValue.assignmentFile = fileName;
    formValue.userId = this.studentId;
    this.uploadAssignmentService.uploadAssignmentDb(formValue).subscribe((response: any) => {
      response = response.json();
      if (response.Success === 'Y') {
        this.assignmentUploadSuccess = true;
        this.UploadAssignmentForm.reset();
      } else {
        this.fileUploadFailed = true;
      }

      console.log(response);
    });
  }


}


