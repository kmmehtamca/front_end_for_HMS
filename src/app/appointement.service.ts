
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointement } from './appointement';

@Injectable({
  providedIn: 'root'
})
  export class AppointementService {
    

    constructor(private http: HttpClient) {}

    private apiUrl = "http://localhost:9090/api/v3";
    
    getAppointementlist(): Observable<Appointement[]> {
      return this.http.get<Appointement[]>(`${this.apiUrl}/retrieveall`);
    }

    CreateAppointement(appointement:Appointement):Observable<Appointement>
      {
        return this.http.post<Appointement>(`${this.apiUrl}/insert`,appointement);
      }
    
      deleteAppointement(id:number):Observable<object>
      {
        return this.http.delete(`${this.apiUrl}/appointments/${id}`);
      }
    }
