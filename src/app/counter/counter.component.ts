import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SpinerService } from '../services/spiner.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,AfterViewInit,OnDestroy {

  constructor( private spinner: SpinerService) { }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  number: number = 0;
  @ViewChild('counter') mycounter!:ElementRef;

  ngOnInit(): void {
    //this.spinner.setStatus(true)
  
  
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mycounter.nativeElement.value = "Tony Stark";
    }, 1);
  }

  changeNumber (num: number) {
    this.number+= num;
  }
}
