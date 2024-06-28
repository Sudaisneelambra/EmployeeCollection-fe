import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  api = environment.api;

  constructor(private http:HttpClient) { }

  addDesignation(data:any):Observable<any>{
    return this.http.post(`${this.api}/admin/addDesignation`,data);
  }
  
}
