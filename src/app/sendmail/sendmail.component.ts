import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  resetForm : FormGroup;

  constructor(
    private fb:FormBuilder, 
    private userService : UserService, 
    private router : Router,
    private toastr : ToastrService,
    private activatedRoute: ActivatedRoute, 
  ) {
    this.resetForm = this.fb.group({
      email:this.fb.control("",[Validators.required,Validators.email]),
    })
   }

  ngOnInit(): void {
  }

  mailtriger(){
    this.userService.sendmail(this.resetForm.value).subscribe(response =>{
      console.log(response)
      this.router.navigate(["/"]);
      this.toastr.success("Check your mail for password reset link!");   
    },
    error =>{
      console.log(error)
      alert(`${error.error.message}`)
    })
  }

}
