import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
constructor(private router:Router,private docauth:DocauthService){}
InvalidLogin = false ;
username:string="";
password:string="";


checkLogin ()
{
    if (this.docauth.authenticate(this.username,this.password))
    {
      this.router.navigate(['docdash']);

      this.InvalidLogin = false;
    }
    else
    {
      this.InvalidLogin = true;
      alert("Incorrect Credentials")
      this.username="";
      this.password="";
      this.router.navigate(['doclogin']);

      
    }
  }

}