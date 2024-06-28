import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';

// import interfaces
import { Designation } from 'src/app/interfaces/designation.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  api = environment.api;

  constructor(private http:HttpClient) { }

  addDesignation(data:any):Observable<any>{
    return this.http.post(`${this.api}/admin/addDesignation`,data);
  }

  getDesignation():Observable<any>{
    return this.http.get<any>(`${this.api}/admin/getDesignation`);
  }
}
