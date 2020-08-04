import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed=true;

  constructor(private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  signout(){
    localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
      this.router.navigate(['/']);
      this.toastr.warning('You have been Logged Out!');
  }

}
