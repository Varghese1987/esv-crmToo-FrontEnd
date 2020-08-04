import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sr-list',
  templateUrl: './sr-list.component.html',
  styleUrls: ['./sr-list.component.css']
})
export class SrListComponent implements OnInit {

  srList;

  constructor(private crmService:CrmService, private router:Router) { }

  ngOnInit(): void {
    this.srList=this.crmService.getSr();
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  deleteSr(id){
    this.crmService.deleteSr(id).subscribe(response=>{
      alert(response.message)
      this.redirectTo("/home/srManage")
    })
  }

}
