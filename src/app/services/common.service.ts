import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  confirmbooleanBe = new BehaviorSubject(false)
  confirmMessageBe = new BehaviorSubject('')
  confirmPromise = new BehaviorSubject({})
}
