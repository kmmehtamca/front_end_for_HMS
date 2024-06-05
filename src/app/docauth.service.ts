import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }
  authenticate(username:string,password:string)
  {
    if (username =="kapil" && password == "kapil")
      {
        sessionStorage.setItem('username',username) ;
        return true ;
      }
      else{
        return false ;
      }
  }

  isuserlogin()
  {
    console.log("user is logged in");
    let user = sessionStorage.getItem('username');

    return !(user==null)
  }

  logout(){
    
    sessionStorage.removeItem("username");
    console.log("user logged out");
  }
}



