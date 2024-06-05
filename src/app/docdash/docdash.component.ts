import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
  patients:Patient[]=[];
  constructor (private patientservice:PatientService,private router:Router,private docauthserice:DocauthService){}
  
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

  update(id:number)
  {
      this.router.navigate(['/update-patient',id])
  }
  delete(id:number){
    this.patientservice.deleteAppointement(id).subscribe(data=>{
      console.log(data);
      this.getpatients(); 
    });
  }
  
  view(id:number){
    this.router.navigate(['view-patient',id]) ;
    
    }
    logout()
    {
      this.docauthserice.logout();
      this.router.navigate(['home']) 
    }
  }


