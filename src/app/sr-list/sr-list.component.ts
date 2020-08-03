import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-sr-list',
  templateUrl: './sr-list.component.html',
  styleUrls: ['./sr-list.component.css']
})
export class SrListComponent implements OnInit {

  srList;

  constructor(private crmService:CrmService) { }

  ngOnInit(): void {
    this.srList=this.crmService.getSr();
  }
  deleteSr(id){
    this.crmService.deleteSr(id).subscribe(response=>{
      alert(response.message)
    })
  }

}
