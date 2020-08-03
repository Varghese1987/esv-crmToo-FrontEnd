import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  registerForm: FormGroup;
  role = ["Admin","Manager","Employee-Level-1","Employee-Level-2"];
  roleList;

  constructor(
    private userService:UserService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router
  ) {
    this.registerForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      role:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",Validators.required)
    })
   }

  ngOnInit(): void {
    this.roleList = this.role.map(item=>item)
  }


  register(){
    this.userService.addUser(this.registerForm.value).subscribe(response=>{
      this.router.navigate(["/home"])
    })
  }

}
