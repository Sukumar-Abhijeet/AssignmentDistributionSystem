import { Component, OnInit } from '@angular/core';
import { longStackSupport } from 'q';
import { AuthService } from '../route-auth';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userRole = '';
  constructor(private router: Router, private authService: AuthService, private appComp: AppComponent) { }

  ngOnInit() {
    this.setHeader();
  }
  setHeader() {
    if (localStorage.getItem('userRole')) {
      this.userRole = localStorage.getItem('userRole');
    }
  }

  logout() {
    console.log('logout() : ');
    this.appComp.headerVisible = this.authService.isLoggedIn;
    this.authService.logout();
    this.router.navigateByUrl('login');
    sessionStorage.clear();
    localStorage.clear();
  }




}
