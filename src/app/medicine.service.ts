import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  
  id:number=0;
  constructor(private httpclient:HttpClient) {}
 
  private baseurl = "http://localhost:9090/api/v2" ;
 
  getMedicinelist():Observable<Medicine[]>
    {
      return this.httpclient.get<Medicine[]>(`${this.baseurl}/retrieveall`);
    }

    CreateMedicine(medicine:Medicine):Observable<Medicine>
      {
        return this.httpclient.post<Medicine>(`${this.baseurl}/insert`,medicine);
      }

      getmedicinebyid(id:number):Observable<Medicine>
    {
      return this.httpclient.get<Medicine>(`${this.baseurl}/retrievebyid/${id}`);
    }

    updatemedicinedata(id:number,medicine:Medicine):Observable<Medicine>
  {
    return this.httpclient.put<Medicine>(`${this.baseurl}/medicines/${id}`,medicine);
  }

  deletemedicine(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.baseurl}/medicines/${id}`);
  }


}
