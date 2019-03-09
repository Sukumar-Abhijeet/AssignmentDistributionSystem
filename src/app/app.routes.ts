import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateRouteGuard } from './route-guard';
import { HeaderComponent } from './header/header.component';
import { RegisterFacultyComponent } from './faculty/register-faculty/register-faculty.component';
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
import { UploadAssignmentComponent } from './student/upload-assignment/upload-assignment.component';
import { SubjectsListComponent } from './faculty/subjects-list/subjects-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AssignedSubjectsComponent } from './faculty/assigned-subjects/assigned-subjects.component';
import { CheckDownloadedComponent } from './faculty/check-downloaded/check-downloaded.component';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ActivateRouteGuard]
    },
    // Faculty
    {
        path: 'faculty/register-faculty',
        component: RegisterFacultyComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/view-faculty',
        component: ViewFacultyComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/link-subjects',
        component: LinkSubjectsComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/add-subject',
        component: AddSubjectComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/subjects-list',
        component: SubjectsListComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/new-students',
        component: NewStudentsComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/registered-students',
        component: RegisteredStudentsComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/assign-assignment',
        component: AssignAssignmentComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/check-uploaded',
        component: CheckUploadedComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/check-downloaded',
        component: CheckDownloadedComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/assign-admin',
        component: AssignAdminComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/remove-admin',
        component: RemoveAdminComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'faculty/assigned-subjects',
        component: AssignedSubjectsComponent,
        canActivate: [ActivateRouteGuard]
    },
    // Student  
    {
        path: 'student/download-assignment',
        component: DownloadAssignmentComponent,
        canActivate: [ActivateRouteGuard]
    },
    {
        path: 'student/upload-assignment',
        component: UploadAssignmentComponent,
        canActivate: [ActivateRouteGuard]
    },

];
