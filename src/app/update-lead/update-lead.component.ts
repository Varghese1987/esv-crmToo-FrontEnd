import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrmService } from '../crm.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-lead',
  templateUrl: './update-lead.component.html',
  styleUrls: ['./update-lead.component.css']
})
export class UpdateLeadComponent implements OnInit {

  updateLeadForm:FormGroup;
  cate = ["Automobile","Pharma","Realestate","Petrolium"];
  categoryList;
  status=["New","Contacted","Qualified","Lost","Cancelled","Confirmed"];
  statusList;
  currentLeadId;
  currentLeadData;

  constructor(
    private crmService:CrmService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.updateLeadForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      company:this.fb.control("",Validators.required),
      phone:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
      category:this.fb.control("",Validators.required),
      description:this.fb.control("",Validators.required),
      status:this.fb.control("",Validators.required)
    })
   }

  ngOnInit(): void {
    this.categoryList = this.cate.map(item=>item);
    this.statusList = this.status.map(item=>item);
    this.currentLeadId=this.activatedRoute.snapshot.params.id;
    this.currentLeadData = this.crmService.getLeadById(this.currentLeadId).subscribe(data=>{
      this.updateLeadForm.patchValue({
        firstName:data.firstName,
        lastName:data.lastName,
        company:data.company,
        phone:data.phone,
        email:data.email,
        category:data.category,
        description:data.description,
        status:data.status
      })
    })
  }

  updateLead(){
    this.crmService.editLead(this.currentLeadId,this.updateLeadForm.value).subscribe(response=>{
      this.router.navigate(["/home/leadManage"])
    })

  }

}
