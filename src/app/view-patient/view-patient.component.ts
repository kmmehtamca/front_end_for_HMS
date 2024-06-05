import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  patient:Patient = new Patient ();
  id:number=0; 
  
  constructor(private patientservice:PatientService,private route:ActivatedRoute) {}

  ngOnInit():void
  {
    this.id = this.route.snapshot.params['id'];
    this.patientservice.getpatientbyid(this.id).subscribe(data=>{
      this.patient = data ;

    })
  }
}
