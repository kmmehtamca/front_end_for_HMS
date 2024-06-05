  import { Component } from '@angular/core';
  import { Patient } from '../patient';
  import { PatientService } from '../patient.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-create-patient',
    templateUrl: './create-patient.component.html',
    styleUrl: './create-patient.component.css'
  })
  export class CreatePatientComponent {
     patient:Patient = new Patient();
    constructor(private patientservice:PatientService,private router:Router){}

    savepatient()
    {
      this.patientservice.createpatient(this.patient).subscribe(data=>{
        console.log(data);
      })
    }

    onSubmit()
    {
      this.savepatient();
      this.goTopatientlist();

    }
    goTopatientlist() {
      this.router.navigate(['/docdash'])
    }
  }
