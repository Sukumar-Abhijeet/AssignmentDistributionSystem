import { Component, OnInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-assign-admin',
  templateUrl: './assign-admin.component.html',
  styleUrls: ['./assign-admin.component.css']
})
export class AssignAdminComponent implements OnInit {

  constructor(private assignAdminService: RegisterFacultyService) { }
  facultyList: Array<any> = [];
  assignSuccess = false;
  assignFailed = false;
  ngOnInit() {
    this.fetchFaculties();
  }
  fetchFaculties() {
    this.assignAdminService.fetchfaculties().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.facultyList = response.Faculties;
    });
  }
  assignAdmin(facultyId) {
    this.assignSuccess = false;
    this.assignFailed = false;
    this.assignAdminService.assignAdmin(facultyId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.assignSuccess = true;
        setTimeout(() => {
          this.fetchFaculties();
        }, 1000);
        setTimeout(() => {
          this.assignSuccess = false;
        }, 3000);
      } else {
        this.assignFailed = true;
      }
    });
  }

}
