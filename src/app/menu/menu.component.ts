import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userRole = '';
  userName = '';
  userDesignation = '';
  adminMenu = false;
  studentMenu = false;
  facultyMenu = false;
  tempAdmin = false;
  constructor() { }

  ngOnInit() {
    this.setMenu();
  }
  setMenu() {
    this.adminMenu = false;
    this.studentMenu = false;
    this.facultyMenu = false;
    if (localStorage.getItem('userRole')) {
      this.userRole = localStorage.getItem('userRole');
      this.userName = localStorage.getItem('userName');
      this.userDesignation = localStorage.getItem('userDesignation');
      console.log(this.userRole, this.userDesignation);
      if (this.userRole === 'ADMIN' && this.userDesignation === 'ADMIN') {
        this.adminMenu = true;
      }
      if (this.userRole === 'STUDENT') {
        this.studentMenu = true;
      }
      if (this.userRole === 'FACULTY') {
        this.facultyMenu = true;
      }
      if (this.userRole === 'ADMIN' && this.userDesignation !== 'ADMIN') {
        this.tempAdmin = true;
      }
      console.log('setMenu Students', this.studentMenu);
      console.log('setMenu Faculty', this.facultyMenu);
      console.log('setMenu Admin', this.adminMenu);
      console.log('setMenu TempAdmin', this.tempAdmin);
    }
  }

}
