import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ns:NavbarService) { }
  id = 0;
  showNavbar:boolean = true;
  @Output() menu = new EventEmitter<number>();
  ngOnInit(): void {
    this.ns.navBarStatus.subscribe(status => this.showNavbar = status)
  }

  setId(number: number): void {
    this.id = number;
    this.menu.emit(number);
  }

  setClass() {
    return true;
  }
}
