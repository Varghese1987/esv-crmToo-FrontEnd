import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-create-sr',
  templateUrl: './create-sr.component.html',
  styleUrls: ['./create-sr.component.css']
})
export class CreateSrComponent implements OnInit {

  createSrForm:FormGroup;

  constructor(
    private crmService:CrmService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router
  ) {
    this.createSrForm = this.fb.group({
      sub:this.fb.control("",Validators.required),
      description:this.fb.control("",Validators.required)
    })
   }

  ngOnInit(): void {
  }

  addSr(){
    
    this.crmService.addSr(localStorage.getItem('userId'),this.createSrForm.value,localStorage.getItem('authToken')).subscribe(response=>{
      this.router.navigate(["/home/srManage"])
    })
  }

}
