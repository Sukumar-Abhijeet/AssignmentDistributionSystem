import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterFacultyService } from '../faculty.services';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  // subjectAdd: Array<any> = [];
  subjectAdditionForm: FormGroup;
  regSuccess = false;
  regFailed = false;
  constructor(private addSubjectService: RegisterFacultyService) { }

  ngOnInit() {
    this.initSubjectAddition();
  }
  initSubjectAddition() {
    console.log('initSubjectAddition ()');
    this.subjectAdditionForm = new FormGroup({
      subjectName: new FormControl('', Validators.required),
      subjectCode: new FormControl('', Validators.required),
      acronym: new FormControl('')
    });

  }
  subjectAddition(formValue) {
    this.regSuccess = false;
    this.regFailed = false;
    console.log('subjectAddition ()');
    this.addSubjectService.subjectAddition(formValue).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.subjectAdditionForm.reset();
        this.regSuccess = true;
      } else {
        this.regFailed = true;
      }
    });
  }
}
