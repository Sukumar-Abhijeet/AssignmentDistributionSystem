import { Component, OnInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-remove-admin',
  templateUrl: './remove-admin.component.html',
  styleUrls: ['./remove-admin.component.css']
})
export class RemoveAdminComponent implements OnInit {

  constructor(private removeTempAdminService: RegisterFacultyService) { }
  tempAdminList: Array<any> = [];
  removeSuccess = false;
  removeFailed = false;
  ngOnInit() {
    this.fetchAdminFaculties();
  }
  fetchAdminFaculties() {
    this.removeTempAdminService.fetchAdminFaculties().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.tempAdminList = response.TempFaculties;
    });
  }
  removeAdmin(facultyId) {
    this.removeTempAdminService.removeAdmin(facultyId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.removeSuccess = true;
        setTimeout(() => {
          this.fetchAdminFaculties();
        }, 1000);
        setTimeout(() => {
          this.removeSuccess = false;
        }, 3000);
      } else {
        this.removeFailed = true;
      }
    });
  }
}
