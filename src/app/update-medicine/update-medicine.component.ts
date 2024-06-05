import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
 medicine:Medicine = new Medicine() ;
 id:number= 0 ; 
 constructor(private medicineservice:MedicineService,private route:ActivatedRoute,private router:Router){}
 
 ngOnInit():void{
  this.id = this.route.snapshot.params['id'];
  this.medicineservice.getmedicinebyid(this.id).subscribe(data=>{
    this.medicine=data ;

  })
}
 onSubmit()
    {
        this.medicineservice.updatemedicinedata(this.id, this.medicine).subscribe(data=>{
        console.log(data);
        this.gotomedicinetlist();
  
      })
    }
    
    gotomedicinetlist(){
      this.router.navigate(['/medicinetlist']) ;  
    }
}

