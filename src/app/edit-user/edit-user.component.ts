import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  role = ["Admin","Manager","Employee-Level-1","Employee-Level-2"]; 
  roleList;
  currentUserId;
  currentUserData;

  constructor(
    private userService:UserService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.editUserForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      role:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
    })
   }

  ngOnInit(): void {
    this.roleList = this.role.map(item=>item)
    this.currentUserId=this.activatedRoute.snapshot.params.id;
    this.currentUserData = this.userService.getUserById(this.currentUserId).subscribe(data=>{
      this.editUserForm.patchValue({
        firstName:data.firstName,
        lastName:data.lastName,
        role:data.role,
        email:data.email
      })
    })
  }

  update(){
    this.userService.editUser(this.currentUserId,this.editUserForm.value).subscribe(response=>{
      this.router.navigate(["/home/userManage"])
    })
  }

}
