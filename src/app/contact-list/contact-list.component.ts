import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
contactList;
  constructor(private crmService:CrmService,private router:Router) { }

  ngOnInit(): void {
    this.contactList=this.crmService.getContact();
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  deleteContact(id){
    this.crmService.deleteContact(id).subscribe(response=>{
      alert(response.message)
      this.redirectTo("/home/contactManage")
    })
  }

}
