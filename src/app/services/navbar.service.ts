import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  navBarStatus = new BehaviorSubject<boolean>(true)

  updateNavbarStatus(status:boolean) {
    this.navBarStatus.next(status);
  }
}
