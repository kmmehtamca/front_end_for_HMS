import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointementComponent } from './appointement/appointement.component';
import { CreateAppointementComponent} from './create-appointement/create-appointement.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DocauthguardService } from './docauthguard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  {path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'appointementlist',component:AppointementComponent,canActivate:[AdminauthguardService]},
  {path:'create-Appointement',component:CreateAppointementComponent,canActivate:[AdminauthguardService]},
  {path:'home',component:HomeComponent,canActivate:[DocauthguardService]},
  {path:'docdash',component:DocdashComponent,canActivate:[DocauthguardService]},
  {path:'createpatient',component:CreatePatientComponent,canActivate:[DocauthguardService]},
  {path:'medicinetlist',component:MedicinelistComponent,canActivate:[DocauthguardService]},
  {path:'createmedicine',component:CreateMedicineComponent,canActivate:[DocauthguardService]},
  {path:'update-patient/:id',component:UpdatePatientComponent,canActivate:[DocauthguardService]},
  {path:'view-patient/:id',component:ViewPatientComponent,canActivate:[DocauthguardService]},
  {path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DocauthguardService]},
  {path:'doclogin',component:DocloginComponent},
  {path:'adminlogin',component:AdminloginComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
  

})

export class AppRoutingModule { }
