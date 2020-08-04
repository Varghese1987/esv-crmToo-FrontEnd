import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contactForm:FormGroup;
  currentContactId;
  currentContactData;
  constructor(
    private crmService:CrmService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      company:this.fb.control("",Validators.required),
      phone:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email])
    })
   }

  ngOnInit(): void {
    this.currentContactId=this.activatedRoute.snapshot.params.id;
    this.currentContactData = this.crmService.getContactById(this.currentContactId).subscribe(data=>{

      this.contactForm.patchValue({
        firstName:data.firstName,
        lastName:data.lastName,
        company:data.company,
        phone:data.phone,
        email:data.email
      })
    })
  }
  updateContact(){
    this.crmService.editContact(this.currentContactId,this.contactForm.value).subscribe(response=>{
      this.router.navigate(["/home/contactManage"])
    })
  }

}
