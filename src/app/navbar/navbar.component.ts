import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  id = 0;
  @Output() menu = new EventEmitter<number>();
  ngOnInit(): void {
  }

  setId(number: number): void {
    this.id = number;
    this.menu.emit(number);
  }

  setClass() {
    return true;
  }
}
