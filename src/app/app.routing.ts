//Necesary
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from  '@angular/core';

//Components
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ProjectComponent } from './project/project.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { RequestsComponent } from './requests/requests.component';
import { MyrequetsComponent } from './myrequets/myrequets.component'; 
import { UserDetailComponent } from './user-detail/user-detail.component';

import { IdentityGuard } from './services/identity.guard';


const appRoutes : Routes = [
    {path: '', component: InitialPageComponent},
    {path: 'myprojects', component: ProjectComponent},
    {path: 'myprojects/:page', component: ProjectComponent},
    {path: 'home', component: OtherProjectsComponent},
    {path: 'home/:page', component: OtherProjectsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'ajustes', component: UserEditComponent, canActivate: [IdentityGuard]},
    {path: 'project-edit/:id', component: ProjectEditComponent, canActivate: [IdentityGuard]},
    {path: 'project-detail/:id', component: ProjectDetailComponent, canActivate: [IdentityGuard]},
    {path: 'new-project', component: ProjectNewComponent, canActivate: [IdentityGuard]},
    {path: 'requests', component: RequestsComponent},
    {path: 'myrequests', component: MyrequetsComponent},
    {path: 'user-detail/:id', component: UserDetailComponent, canActivate: [IdentityGuard]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}