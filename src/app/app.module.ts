import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { CheckUserComponent } from './check-user/check-user.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserManageComponent } from './user-manage/user-manage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ToastrModule } from 'ngx-toastr';
import { CreateSrComponent } from './create-sr/create-sr.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { UpdateSrStatusComponent } from './update-sr-status/update-sr-status.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { UpdateLeadComponent } from './update-lead/update-lead.component';
import { SrListComponent } from './sr-list/sr-list.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    CheckUserComponent,
    ResetPwdComponent,
    DashBoardComponent,
    HomeComponent,
    UserManageComponent,
    NavbarComponent,
    ListUserComponent,
    EditUserComponent,
    CreateSrComponent,
    CreateContactComponent,
    CreateLeadComponent,
    UpdateSrStatusComponent,
    UpdateContactComponent,
    UpdateLeadComponent,
    SrListComponent,
    LeadListComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
