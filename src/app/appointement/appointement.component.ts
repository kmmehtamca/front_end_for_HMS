import { Component, OnInit } from '@angular/core';
import { Appointement } from '../appointement';
import { AppointementService } from '../appointement.service';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent{
  
  constructor(private appointementService: AppointementService) {}
  
  appointements: Appointement[] = [];
  
  ngOnInit():void {
    
    this.getAppointements();
  }


  getAppointements(): void {
    this.appointementService.getAppointementlist().subscribe(data => {
      this.appointements = data;
    });
  }

  delete(id:number){
    this.appointementService.deleteAppointement(id).subscribe(data=>{
      console.log(data);
      this.getAppointements();
    })
  }
}
