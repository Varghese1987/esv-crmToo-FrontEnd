import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  pwdForm : FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router:Router, 
    private userservice:UserService,
    private toastr: ToastrService,
    private fb:FormBuilder
  ) { 
    this.pwdForm = this.fb.group({
      password:this.fb.control("",Validators.required)
    })
  }

  ngOnInit(): void {
  }

  reset(){
    this.userservice.updatepwd(this.pwdForm.value,this.activatedRoute.snapshot.params.string).subscribe((response)=>{
      //console.log(response);
      this.toastr.success(response.message );
      this.router.navigate(["/"]);
    })
  }

}
