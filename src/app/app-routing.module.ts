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


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
