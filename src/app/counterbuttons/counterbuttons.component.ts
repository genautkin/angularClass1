import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css']
})
export class CounterbuttonsComponent implements OnInit {

  constructor() { }

  @Output() buttonEvent = new EventEmitter<number>();
  @Output() resetEvent = new EventEmitter();

  ngOnInit(): void {
  }
  eventButton(num: number): void {
    this.buttonEvent.emit(num);
  }
}
