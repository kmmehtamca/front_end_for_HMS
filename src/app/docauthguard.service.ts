import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';

import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DocauthguardService implements CanActivate {

  

  constructor(private docauthservice:DocauthService,private router:Router) { }
  canActivate ()   {
    
    if(this.docauthservice.isuserlogin()){
      return true;
     }
     else {this.router.navigate(['doclogin']);
      return false ;
     }
  }
}
