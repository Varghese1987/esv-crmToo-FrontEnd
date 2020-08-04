import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  srList;
  leadList;
  contactList;

  constructor(private crmService:CrmService) { }

  ngOnInit(): void {
    this.crmService.getDashBoardData().subscribe(data=>{
      this.srList = data.sr;
      this.leadList=data.lead;
      this.contactList=data.contact;
      // console.log(this.contactList)
    })
  }

}
