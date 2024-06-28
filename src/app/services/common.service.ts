import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // confirmation behavior subjects
  confirmbooleanBe = new BehaviorSubject(false)
  confirmMessageBe = new BehaviorSubject('')
  confirmPromise = new BehaviorSubject({})

  // loading behavior subject
  loadingBooleanBe = new BehaviorSubject(false)

  // success behavior subject
  successBooleanBe = new BehaviorSubject(false)
  successMessageBe = new BehaviorSubject('')

    // error behavior subject
    errorBooleanBe = new BehaviorSubject(false)
    errorMessageBe = new BehaviorSubject('')
}
