import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.services';
import { FormGroup, FormControl } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-download-assignment',
  templateUrl: './download-assignment.component.html',
  styleUrls: ['./download-assignment.component.css']
})
export class DownloadAssignmentComponent implements OnInit {

  constructor(private checkAssignmentService: StudentService) { }
  downloadAssignmentForm: FormGroup;
  subjectList: Array<any> = [];
  assignmentList: Array<any> = [];
  selectedModules: Array<any> = [];
  noSubject = false;
  batchId: any = '';
  branchId: any = '';
  groupId: any = '';
  semesterId: any = '';
  section: any = '';
  noAssignment = false;
  ngOnInit() {
    this.fetchSubjects();
    this.initdownloadAssignment();
  }
  checkAssignments() {

  }
  initdownloadAssignment() {
    console.log('initdownloadAssignment()');
    this.downloadAssignmentForm = new FormGroup({
      subjects: new FormControl(''),
      module: new FormControl(''),
    });
  }
  fetchSubjects() {
    this.noSubject = false;
    const studentId = localStorage.getItem('userId');
    this.checkAssignmentService.fetchSubjects(studentId).subscribe((response: any) => {
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
  showModule() {
    const that = this;
    that.selectedModules = [];
    const subId = this.downloadAssignmentForm.controls['subjects'].value;
    console.log('showModule() :', subId);
    for (let i = 0; i < this.subjectList.length; i++) {
      const Obj = this.subjectList[i];
      if (Obj.SubjectId === subId) {
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
    const subjectId = this.downloadAssignmentForm.controls['subjects'].value;
    const moduleId = this.downloadAssignmentForm.controls['module'].value;
    console.log(subjectId, this.batchId, this.branchId, this.semesterId, this.section, this.groupId);
    this.checkAssignmentService.showAssignment(subjectId, this.batchId, this.branchId, this.semesterId, this.section, this.groupId, moduleId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.assignmentList = response.AssignmentList;
        $('.hideTable').show(2000);
      } else {
        this.noAssignment = true;
        $('.hideTable').hide();
      }
    });
  }

  setDownload(assignmentId) {
    const studentId = localStorage.getItem('userId');
    console.log(assignmentId, studentId);
    this.checkAssignmentService.setDownload(assignmentId, studentId).subscribe((response: any) => {
      console.log(response);
    });
  }

}
