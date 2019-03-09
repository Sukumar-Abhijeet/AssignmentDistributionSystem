import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-assigned-subjects',
  templateUrl: './assigned-subjects.component.html',
  styleUrls: ['./assigned-subjects.component.css']
})
export class AssignedSubjectsComponent implements OnInit {
  checkAssignedSubjectForm: FormGroup;
  branchList: Array<any> = [];
  batchList: Array<any> = [];
  subjectList: Array<any> = [];
  fetchedSubjectList = false;
  noAssignedSubjects = false;
  constructor(private checkAssignedSubjectService: RegisterFacultyService) { }

  ngOnInit() {
    this.initCheckAssignedSubjectForm();
    this.getAllBatches();
    this.getAllBranches();
  }
  initCheckAssignedSubjectForm() {
    console.log('initCheckDownloadAssignmentForm()');
    this.checkAssignedSubjectForm = new FormGroup({
      department: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      semseter: new FormControl('', Validators.required),
    });
  }
  getAllBranches() {
    this.checkAssignedSubjectService.getAllBranches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.branchList = response.Branches;
    });
  }


  getAllBatches() {
    this.checkAssignedSubjectService.getAllBatches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.batchList = response.Batches;
    });
  }


  checkSubject(formValue) {
    this.fetchedSubjectList = false,
      this.noAssignedSubjects = false;
    formValue.facultyId = localStorage.getItem('userId'),
      this.checkAssignedSubjectService.checkSubject(formValue).subscribe((response: any) => {
        response = response.json();
        console.log(response);
        if (response.Success === 'Y') {
          this.fetchedSubjectList = true;
          this.subjectList = response.SubjectsList;
        } else {
          this.noAssignedSubjects = true;
        }

      });
  }
}
