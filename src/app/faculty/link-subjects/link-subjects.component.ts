import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RegisterFacultyService } from '../faculty.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-link-subjects',
  templateUrl: './link-subjects.component.html',
  styleUrls: ['./link-subjects.component.css']
})
export class LinkSubjectsComponent implements OnInit, AfterContentInit {
  linkSubjectForm: FormGroup;
  addModulesForm: FormGroup;
  branchList: Array<any> = [];
  batchList: Array<any> = [];
  subjectList: Array<any> = [];
  linkedSubjectList: Array<any> = [];
  selectedSubjects: Array<any> = [];
  selectedModules: Array<any> = [];
  showModule = false;
  regSuccess = false;
  regFailed = false;
  noSubjectLinked = false;
  linkModSuccess = false;
  linkModFailed = false;
  semSubId = '';
  department = '';
  departmentId = '';
  batchId = '';
  semesterId = '';
  batchName = '';
  semseter = '';
  constructor(private linkSubjectService: RegisterFacultyService) { }

  ngOnInit() {
    this.getAllBranches();
    this.initLinkSubjects();
    this.getAllSubjects();
    this.getAllBatches();
  }

  ngAfterContentInit(): void {
    this.selectedSubjectsCheck();
  }

  initLinkSubjects() {
    console.log('initLinkSubjects()');
    this.linkSubjectForm = new FormGroup({
      department: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      semseter: new FormControl('', Validators.required),
      multipleSubjects: new FormControl('', Validators.required)
    });
  }


  getAllBranches() {
    this.linkSubjectService.getAllBranches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.branchList = response.Branches;
    });
  }


  getAllBatches() {
    this.linkSubjectService.getAllBatches().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.batchList = response.Batches;
    });
  }


  getAllSubjects() {
    this.linkSubjectService.getAllSubjects().subscribe((response: any) => {
      response = response.json();
      console.log(response);
      this.subjectList = response.Subjects;
    });
  }


  showLinkModule() {
    console.log('showLinkModule()');
    this.departmentId = this.linkSubjectForm.controls['department'].value;
    this.batchId = this.linkSubjectForm.controls['batch'].value;
    this.semesterId = this.linkSubjectForm.controls['semseter'].value;

    console.log('Department:', this.departmentId, 'Batch:', this.batchId, 'Sem:', this.semesterId);
    this.fetchLinkModules();
    this.department = ' Branch' + $('#department option:selected').attr('data-name');
    this.batchName = 'Batch :' + $('#batch option:selected').attr('data-name');
    this.semseter = 'Sem : ' + this.linkSubjectForm.controls['semseter'].value;
  }

  selectedSubjectsCheck() {
    const that = this;
    $('#multipleSubjects').select2().on('change', function (e) {
      const selectedSubjects = $('#multipleSubjects').select2('val');
      console.log(selectedSubjects);
      selectedSubjects.forEach(function (value) {
        const ar = value.split(': ');
        if (ar.length > 1) {
          if (that.selectedSubjects.indexOf(ar[1]) < 0) {
            that.selectedSubjects.push(ar[1].replace(/[']/g, ''));
          }
        }
      });
      console.log(that.selectedSubjects.join());
      that.linkSubjectForm.controls['multipleSubjects'].setValue(that.selectedSubjects.join());
    });
  }


  linkSubjects(formValue) {
    console.log('linkSubjects()');
    this.regFailed = false;
    this.regSuccess = false;
    this.noSubjectLinked = false;

    this.departmentId = this.linkSubjectForm.controls['department'].value;
    this.batchId = this.linkSubjectForm.controls['batch'].value;
    this.semesterId = this.linkSubjectForm.controls['semseter'].value;

    this.linkSubjectService.linkSubjects(formValue).subscribe((response: any) => {
      response = response.json();
      console.log('response', response);
      if (response.Success === 'Y') {
        this.linkSubjectForm.reset();
        this.selectedSubjects = [];
        this.regSuccess = true;
        this.fetchLinkModules();
      } else {
        this.regFailed = true;
      }
    });
  }

  fetchLinkModules() {


    this.noSubjectLinked = false;

    console.log('fetchLinkModules', this.departmentId, this.batchId, this.semesterId);
    this.linkSubjectService.fetchLinkModules(this.departmentId, this.batchId, this.semesterId).subscribe((response: any) => {
      // console.log(response);
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        console.log('Modules Fetched');
        this.linkedSubjectList = response.Subjects;
        this.semSubId = response.SemSubID;
        this.initSelectedModules();
        this.showModule = true;
      } else {
        this.noSubjectLinked = true;
      }
    });
  }


  initSelectedModules() {
    console.log('initLinkSubjects()');
    this.addModulesForm = new FormGroup({
      selectedLinkedSubject: new FormControl('', Validators.required),
      selectedLinkedModules: new FormControl('', Validators.required),
    });
  }

  selectedModulesCheck() {
    const that = this;
    $('#multipleModules').select2().on('change', function (e) {
      const selectedModules = $('#multipleModules').select2('val');
      console.log(selectedModules);
      selectedModules.forEach(function (value) {
        const ar = value.split(': ');
        if (ar.length > 1) {
          if (that.selectedModules.indexOf(ar[1]) < 0) {
            that.selectedModules.push(ar[1].replace(/[']/g, ''));
          }
        }
      });
      console.log(that.selectedModules.join());
      that.addModulesForm.controls['selectedLinkedModules'].setValue(that.selectedModules.join());
    });
  }


  addModules(formValue) {
    console.log(formValue);
    this.linkModFailed = false;
    this.linkModSuccess = false;
    this.linkSubjectService.addModules(formValue, this.semSubId).subscribe((response: any) => {
      response = response.json();
      console.log(response);
      if (response.Success === 'Y') {
        this.linkModSuccess = true;
        this.linkSubjectForm.reset();
        this.addModulesForm.reset();
        this.selectedModules = [];
      } else {
        this.linkModFailed = true;
      }
    });
  }
}
