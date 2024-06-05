import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {
  
  medicines:Medicine[]=[];
  
  constructor (private medicineservice:MedicineService,private router:Router){}
  
  ngOnInit():void{
     
    this.getmedicine() ;
  }
  
  getmedicine()
  {
    return  this.medicineservice.getMedicinelist().subscribe(data=>{
      this.medicines = data;
    }
  )
}
  update(id:number)
  {
    this.router.navigate(['/update-medicine',id])
  }
  
  delete(id:number)
  {
    this.medicineservice.deletemedicine(id).subscribe(data=>{
      console.log(data);
      this.getmedicine(); 
    });
  }
}
