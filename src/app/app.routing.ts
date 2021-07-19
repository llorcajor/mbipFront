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

import { IdentityGuard } from './services/identity.guard';


const appRoutes : Routes = [
    {path: '', component: InitialPageComponent},
    {path: 'inicio', component: ProjectComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'ajustes', component: UserEditComponent, canActivate: [IdentityGuard]},
    {path: 'proyecto/:id', component: ProjectEditComponent, canActivate: [IdentityGuard]},
    {path: 'new-project', component: ProjectNewComponent, canActivate: [IdentityGuard]},
    {path: 'prueba', component: ProjectNewComponent},
    {path: 'prueba', component: ProjectNewComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}