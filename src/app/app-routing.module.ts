import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './auth.guard';
import { ContactManageComponent } from './contact-manage/contact-manage.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { SrManageComponent } from './sr-manage/sr-manage.component';
import { SrListComponent } from './sr-list/sr-list.component';
import { CreateSrComponent } from './create-sr/create-sr.component';
import { UpdateSrStatusComponent } from './update-sr-status/update-sr-status.component';
import { LeadManageComponent } from './lead-manage/lead-manage.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { UpdateLeadComponent } from './update-lead/update-lead.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"sendmail",
    component:SendmailComponent
  },
  {
    path:"resetpwd/:string",
    component:ResetPwdComponent
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:"",
        component:DashBoardComponent
      },
      {
        path:"userManage",
        component:UserManageComponent,
        children:[
          {
            path:"",
            component:ListUserComponent
          },
          {
            path:"addUser",
            component:AddUserComponent
          },
          {
            path:"editUser/:id",
            component:EditUserComponent
          }
        ]
      },
      {
        path:"contactManage",
        component:ContactManageComponent,
        children:[
          {
            path:"",
            component:ContactListComponent
          },
          {
            path:"createContact",
            component:CreateContactComponent
          },
          {
            path:"editContact/:id",
            component:UpdateContactComponent
          }
        ]
      },
      {
        path:"srManage",
        component:SrManageComponent,
        children:[
          {
            path:"",
            component:SrListComponent
          },
          {
            path:"createSr",
            component:CreateSrComponent
          },
          {
            path:"editSr/:id",
            component:UpdateSrStatusComponent
          }
        ]
      },
      {
        path:"leadManage",
        component:LeadManageComponent,
        children:[
          {
            path:"",
            component:LeadListComponent
          },
          {
            path:"createLead",
            component:CreateLeadComponent
          },
          {
            path:"editLead/:id",
            component:UpdateLeadComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true,onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
