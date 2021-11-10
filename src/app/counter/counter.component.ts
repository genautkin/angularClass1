import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SpinerService } from '../services/spiner.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,AfterViewInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked {

  constructor( private spinner: SpinerService) {
    console.log('Constractor')
   }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  number: number = 0;
  @ViewChild('counter') mycounter!:ElementRef;


  changeNumber (num: number) {
    this.number+= num;
  }



  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.number}`);
  }


  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.number}`);
  }


  ngDoCheck() {
    console.log("ngDoCheck")
  }


  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }


  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }


  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }


  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }



}
