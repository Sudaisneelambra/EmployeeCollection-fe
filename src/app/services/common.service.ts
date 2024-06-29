import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import * as jwtDecode from 'jwt-decode'; 

@Injectable({
providedIn: 'root'
})
export class CommonService {

api = environment.api

constructor(private http:HttpClient) { }

/**confirmation behavior subjects */
confirmbooleanBe = new BehaviorSubject(false)
confirmMessageBe = new BehaviorSubject('')
confirmPromise = new BehaviorSubject({})

/**loading behavior subject */
loadingBooleanBe = new BehaviorSubject(false)

/** success behavior subject */
successBooleanBe = new BehaviorSubject(false)
successMessageBe = new BehaviorSubject('')

/**error behavior subject */
errorBooleanBe = new BehaviorSubject(false)
errorMessageBe = new BehaviorSubject('')

/**Login */
login(data:any):Observable<any>{
	return this.http.post(`${this.api}/login`,data)
}

/**Get single users */
getsingleUser(id:any):Observable<any>{
	return this.http.get(`${this.api}/admin/getsingleUser?userId=${id}`)
}

/**decode token */
decodetoken(){
	const token = localStorage.getItem('token');
	if (!token) {
		return;
	}
	const base64Url = token.split('.')[1];
	const base64 = base64Url.replace('-', '+').replace('_', '/');        
	return JSON.parse(window.atob(base64));
}
}
