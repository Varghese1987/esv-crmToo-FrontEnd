import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
userList;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userList=this.userService.getUser();
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(response=>{
      alert(response.message)
      this.redirectTo("/home/useerManage")
    })
  }

}
