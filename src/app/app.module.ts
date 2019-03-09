import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './login/login.services';
import { RegisterService } from './register/register.services';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './route-auth';
import { ActivateRouteGuard } from './route-guard';
import { RegisterFacultyComponent } from './faculty/register-faculty/register-faculty.component';
import { RegisterFacultyService } from './faculty/faculty.services';
import { ViewFacultyComponent } from './faculty/view-faculty/view-faculty.component';
import { LinkSubjectsComponent } from './faculty/link-subjects/link-subjects.component';
import { AddSubjectComponent } from './faculty/add-subject/add-subject.component';
import { NewStudentsComponent } from './faculty/new-students/new-students.component';
import { RegisteredStudentsComponent } from './faculty/registered-students/registered-students.component';
import { AssignAssignmentComponent } from './faculty/assign-assignment/assign-assignment.component';
import { CheckUploadedComponent } from './faculty/check-uploaded/check-uploaded.component';
import { AssignAdminComponent } from './faculty/assign-admin/assign-admin.component';
import { RemoveAdminComponent } from './faculty/remove-admin/remove-admin.component';
import { DownloadAssignmentComponent } from './student/download-assignment/download-assignment.component';
import { StudentService } from './student/student.services';
import { UploadAssignmentComponent } from './student/upload-assignment/upload-assignment.component';
import { SubjectsListComponent } from './faculty/subjects-list/subjects-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.services';
import { AssignedSubjectsComponent } from './faculty/assigned-subjects/assigned-subjects.component';
import { CheckDownloadedComponent } from './faculty/check-downloaded/check-downloaded.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    RegisterFacultyComponent,
    ViewFacultyComponent,
    LinkSubjectsComponent,
    AddSubjectComponent,
    NewStudentsComponent,
    RegisteredStudentsComponent,
    AssignAssignmentComponent,
    CheckUploadedComponent,
    AssignAdminComponent,
    RemoveAdminComponent,
    DownloadAssignmentComponent,
    UploadAssignmentComponent,
    SubjectsListComponent,
    ProfileComponent,
    AssignedSubjectsComponent,
    CheckDownloadedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    RegisterService,
    AppComponent,
    RegisterFacultyService,
    AuthService,
    ActivateRouteGuard,
    StudentService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
