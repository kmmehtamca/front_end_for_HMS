import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  patient:Patient=new Patient();
  id:number=0 ;
  constructor (private patientservice:PatientService,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.patientservice.getpatientbyid(this.id).subscribe(data=>{
      this.patient=data ;

    })
    
  }
  
  onSubmit()
  {
    this.patientservice.updatepatientdata(this.id,this.patient).subscribe(data=>{
      console.log(data);
      this.gotodocdash();

    })
    
  }
  
  gotodocdash(){
    this.router.navigate(['/docdash']) ;  
  }
}
