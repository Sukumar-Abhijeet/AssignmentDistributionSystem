import { Component, OnInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  constructor(private subjectListService: RegisterFacultyService) { }
  subjectList: Array<any> = [];
  ngOnInit() {
    this.fetchAllSubjects();
  }
  fetchAllSubjects() {
    this.subjectListService.fetchAllSubjects().subscribe((response: any) => {
      response = response.json();
      this.subjectList = response.Subjects;
      console.log(response);
    });
  }
}
