import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) {}
 
  private baseurl = "http://localhost:9090/api/v1" ;
 
  getpatientlist():Observable<Patient[]>
    {
      return this.httpclient.get<Patient[]>(`${this.baseurl}/retrieveall`);
    }

    deleteAppointement(id:number):Observable<object>
    {
      return this.httpclient.delete(`${this.baseurl}/patients/${id}`);
    }

    createpatient(patient:Patient):Observable<Patient>
    {
      return this.httpclient.post<Patient>(`${this.baseurl}/insert`,patient);
       
  }
  getpatientbyid(id:number):Observable<Patient>
    {
      return this.httpclient.get<Patient>(`${this.baseurl}/retrievebyid/${id}`);
    }

  updatepatientdata(id:number,patient:Patient):Observable<Patient>
  {
    return this.httpclient.put<Patient>(`${this.baseurl}/patients/${id}`,patient);
  }
}

   

