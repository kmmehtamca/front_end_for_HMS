import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
  medicine:Medicine = new Medicine ();

  constructor(private medicineservice:MedicineService,private router:Router){}
  saveMedicine(){
    console.log("add kapil")
    this .medicineservice.CreateMedicine(this.medicine).subscribe(data=>{
      console.log(data);
      this.gotoMedicine();
    })
  
  
  }  
  onSubmit()
  {
    this.saveMedicine ();
   
  }
  gotoMedicine(){
    this.router.navigate(['/medicinetlist'])
  }
  
}
