import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router,
    private toastr : ToastrService
  ) {
    this.loginForm=this.fb.group({
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",Validators.required)
    })
   }

  ngOnInit(): void {
  }
  login(){
    this.userService.userLogin(this.loginForm.value).subscribe(response=>{
      
      localStorage.setItem('authToken',response.token);
      localStorage.setItem('userId',response.userId);
      localStorage.setItem('role',response.role);
      this.router.navigate(["/home"]);
      this.toastr.success("welcome!");
    },
    error=>{
      alert(`${error.error.message} - Pls Login with correct details or if you are a new user pls register and then login to proceed further`)
    })
  }

}
