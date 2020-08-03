import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})
export class CreateLeadComponent implements OnInit {
createLeadForm: FormGroup;
category = ["Automobile","Pharma","Realestate","Petrolium"];
categoryList;

  constructor(
    private crmService:CrmService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router
  ) {
    this.createLeadForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      company:this.fb.control("",Validators.required),
      phone:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
      category:this.fb.control("",Validators.required),
      description:this.fb.control("",Validators.required)
    })
   }

  ngOnInit(): void {
    this.categoryList = this.category.map(item=>item);
    //console.log(this.categoryList);
  }

  addLead(){
    this.crmService.addLead(localStorage.getItem('userId'),this.createLeadForm.value).subscribe(response=>{
      this.router.navigate(["/home/leadManage"])
    })
  }

}
