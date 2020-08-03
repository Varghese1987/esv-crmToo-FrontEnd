import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-sr-status',
  templateUrl: './update-sr-status.component.html',
  styleUrls: ['./update-sr-status.component.css']
})
export class UpdateSrStatusComponent implements OnInit {

  editSrForm:FormGroup;
  status=["Open","In-process","Released","Cancelled","Completed"];
  statusList;
  currentSrId;
  currentSrData;

  constructor(
    private crmService:CrmService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.editSrForm = this.fb.group({
      srId:this.fb.control("",Validators.required),
      sub:this.fb.control("",Validators.required),
      description:this.fb.control("",Validators.required),
      status:this.fb.control("",Validators.required)
    })
   }

  ngOnInit(): void {
    this.statusList = this.status.map(item=>item)
    this.currentSrId=this.activatedRoute.snapshot.params.id;
    this.currentSrData = this.crmService.getSrById(this.currentSrId).subscribe(data=>{
      this.editSrForm.patchValue({
        srId:data.srId,
        sub:data.sub,
        description:data.description,
        status:data.status
      })
    })
  }

  updateSr(){
    this.crmService.editSr(this.currentSrId,this.editSrForm.value).subscribe(response=>{
      this.router.navigate(["/home/srManage"])
    })
  }

}
