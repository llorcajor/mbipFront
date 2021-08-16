import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownDirective } from './directives/dropdown.directive';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import {ProjectService} from './project/project.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app.routing';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { IdentityGuard } from './services/identity.guard';
import { UserService } from './services/user.service';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { RequestsComponent } from './requests/requests.component';
import { MyrequetsComponent } from './myrequets/myrequets.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    ProjectNewComponent,
    InitialPageComponent,
    ProjectEditComponent,
    ProjectDetailComponent,
    OtherProjectsComponent,
    RequestsComponent,
    MyrequetsComponent,
    UserDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [
    IdentityGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
