import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.services';
import { Router } from '@angular/router';
import { AuthService } from '../route-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkLoginForm: FormGroup;
  logFailed = false;
  accountInactive = false;
  constructor(private lgnService: LoginService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.initCheckLogin();
  }
  initCheckLogin() {
    console.log('initCheckLogin()');
    this.checkLoginForm = new FormGroup({
      registrationNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl('')
    });
  }

  checkLoginAction(formValue) {
    this.logFailed = false;
    this.accountInactive = false;
    this.lgnService.checkLoginAction(formValue).subscribe((response: any) => {
      response = response.json();
      console.log('response', response);
      if (response.Success === 'Y') {
        localStorage.setItem('userRole', response.Role);
        localStorage.setItem('userId', response.Id);
        localStorage.setItem('userDesignation', response.Designation);
        localStorage.setItem('userName', response.Name);
        localStorage.setItem('Password', response.Password);
        localStorage.setItem('Email', response.Email);
        localStorage.setItem('Mobile', response.Mobile);
        localStorage.setItem('islogged', 'true');
        this.authService.loggedIn.next(true);
        this.router.navigateByUrl('/dashboard');
      } else {
        if (response.Success === 'INA') {
          this.accountInactive = true;
        } else {
          this.logFailed = true;

        }
      }

    });
  }
}
