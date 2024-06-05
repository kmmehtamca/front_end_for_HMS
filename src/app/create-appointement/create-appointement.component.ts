import { Component } from '@angular/core';
import { Appointement } from '../appointement';
import { AppointementService } from '../appointement.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-appointement',
  templateUrl: './create-appointement.component.html',
  styleUrl: './create-appointement.component.css'
})
export class CreateAppointementComponent {

appointement:Appointement = new Appointement ();

constructor(private appointementservice:AppointementService,private router:Router){}
saveAppointement(){
  console.log("add kapil")
  this .appointementservice.CreateAppointement(this.appointement).subscribe(data=>{
    console.log(data);
    this.gotoAppointement();
  })


}  
onSubmit()
{
  this.saveAppointement ();
 
}
gotoAppointement(){
  this.router.navigate(['/appointementlist'])
}

}
