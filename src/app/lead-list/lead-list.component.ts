import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  leadList;

  constructor(private crmService:CrmService) { }

  ngOnInit(): void {
    this.leadList=this.crmService.getLead();
    // console.log(this.leadList)
  }

  deleteLead(id){
    this.crmService.deleteLead(id).subscribe(response=>{
      alert(response.message)
    })
  }

}
