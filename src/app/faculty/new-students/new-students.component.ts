import { Component, OnInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.css']
})
export class NewStudentsComponent implements OnInit {
  studentList: Array<any> = [];
  constructor(private newStudentService: RegisterFacultyService) { }

  ngOnInit() {
    this.showStudentList();
  }
  showStudentList() {
    this.newStudentService.showStudentList().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.studentList = response.studentList;
    });
  }

  activateStudent(data) {
    this.newStudentService.activateStudent(data).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.showStudentList();
      }
    });
  }
}
