import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contactForm:FormGroup

  constructor(
    private crmService:CrmService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router
  ) {
    this.contactForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      company:this.fb.control("",Validators.required),
      Phone:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email])
    })
   }

  ngOnInit(): void {
  }

  addContact(){
    this.crmService.addContact(localStorage.getItem('userId'),this.contactForm.value).subscribe(response=>{
      this.router.navigate(["/home/contactManage"])
    })
  }

}