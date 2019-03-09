import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from './profile.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  changePasswordForm: FormGroup;
  passwordNotSet = false;
  passwordSet = false;
  passwordDidNotmatch = false;
  error = false;
  setNewPass = 'NO';
  Name = localStorage.getItem('userName');
  userDesignation = localStorage.getItem('userDesignation');
  Email = localStorage.getItem('Email');
  Mobile = localStorage.getItem('Mobile');
  userId = localStorage.getItem('userId');
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.initChangePasswordForm();
    this.checkDefaultPassword();
  }

  initChangePasswordForm() {
    console.log('initChangePasswordForm()');
    this.changePasswordForm = new FormGroup({
      defaultPass: new FormControl('', Validators.required),
      newPass: new FormControl('', Validators.required),
      enterPass: new FormControl('', Validators.required)
    });

  }


  checkDefaultPassword() {
    this.passwordNotSet = false;
    this.passwordSet = false;
    const Password = localStorage.getItem('Password');
    console.log(Password);
    if (Password !== 'SET') {
      console.log('Not Set');
      this.passwordNotSet = true;
      this.passwordSet = false;
    } else {
      this.passwordSet = true;
      this.passwordNotSet = false;
    }
  }

  newPassword() {
    this.setNewPass = 'YES';
    this.passwordNotSet = true;
    this.passwordSet = false;
  }

  changePassword(formValue) {
    this.passwordDidNotmatch = false;
    this.error = false;
    console.log(formValue.defaultPass);
    if (formValue.enterPass === formValue.newPass) {
      const userId = localStorage.getItem('userId');
      formValue.userId = userId;
      formValue.setNewPass = this.setNewPass;
      formValue.userDesignation = this.userDesignation;
      this.profileService.changePassword(formValue).subscribe((response: any) => {
        response = response.json();
        console.log(response);
        if (response.Success === 'Y') {
          this.changePasswordForm.reset();
          this.passwordSet = true;
          this.passwordNotSet = false;
          localStorage.setItem('Password', response.Password);
          this.passwordSet = true;
        } else {
          this.error = true;
        }

      });
    } else {
      this.passwordDidNotmatch = true;
    }
  }
}
