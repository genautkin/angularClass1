import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  number: number = 0;

  ngOnInit(): void {
  }

  changeNumber (num: number) {
    this.number+= num;
  }
}
