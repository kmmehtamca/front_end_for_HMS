import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private router:Router,private adminauth:AdminauthService){}
  InvalidLogin = false ;
  username:string="";
  password:string="";
  
  
  checkLogin ()
  {
      if (this.adminauth.authenticate(this.username,this.password))
      {
        this.router.navigate(['/admin']);
  
        this.InvalidLogin = false;
      }
      else
      {
        this.InvalidLogin = true;
        alert("Incorrect Credentials")
        this.username="";
        this.password="";
        this.router.navigate(['adminlogin']);
  
        
      }
    }
  
}
