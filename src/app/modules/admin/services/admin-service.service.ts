import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
providedIn: 'root'
})
export class AdminServiceService {

/**Api Url */
api = environment.api;

constructor(private http:HttpClient) { }

/**adding designation */
addDesignation(data:any):Observable<any>{
    return this.http.post(`${this.api}/admin/addDesignation`,data);
}

/**adding location */
addLocation(data:any):Observable<any>{
    return this.http.post(`${this.api}/admin/addLocation`,data);
}

/**get designation */
getDesignation():Observable<any>{
    return this.http.get<any>(`${this.api}/admin/getDesignation`);
}

/**get location */
getLocation():Observable<any>{
    return this.http.get<any>(`${this.api}/admin/getLocation`);
}

/**add user */
addUser(data:any):Observable<any>{
    return this.http.post(`${this.api}/admin/addUser`,data);
}

/**get userslist */
getUsers():Observable<any>{
    return this.http.get(`${this.api}/admin/getUsers`)
}

/** deleting users */
deleteUser(id:any):Observable<any>{
    return this.http.delete(`${this.api}/admin/deleteUser?id=${id}`,)
}

/**get deteled users list */
getdeletedUsers():Observable<any>{
    return this.http.get(`${this.api}/admin/getdeletedUsers`,)
}
}
