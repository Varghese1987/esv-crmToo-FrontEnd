import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
userList;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userList=this.userService.getUser();
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(response=>{
      alert(response.message)
    })
  }

}
