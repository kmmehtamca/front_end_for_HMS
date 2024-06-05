import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  
  
  patients:Patient[]=[];
  constructor (private patientservice:PatientService,private adminauthservice:AdminauthService,private router:Router){}
  
  ngOnInit():void{
    console.log("PP");
    this.getpatients() ;
  }
  
  getpatients()
  {
    this.patientservice.getpatientlist().subscribe(data=>{
      this.patients = data;
    })
  }
  delete(id:number){
    this.patientservice.deleteAppointement(id).subscribe(data=>{
      console.log(data);
      this.getpatients();
    })
  }
  logout()
  {
    this.adminauthservice.logout();
    this.router.navigate(['home'])
  }
}



