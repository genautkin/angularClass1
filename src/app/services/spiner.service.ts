import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinerService {

  show: boolean = false;
  spinnerStatus = new BehaviorSubject<boolean>(false);
  constructor() { }

  setStatus(status: boolean){
    this.spinnerStatus.next(status);
  }
}
