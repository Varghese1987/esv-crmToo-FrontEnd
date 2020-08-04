import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  leadList;

  constructor(private crmService:CrmService,private router:Router) { } 

  ngOnInit(): void {
    this.leadList=this.crmService.getLead();
    // console.log(this.leadList)
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  deleteLead(id){
    this.crmService.deleteLead(id).subscribe(response=>{
      alert(response.message)
      this.redirectTo("/home/leadManage")
    })
  }

}
