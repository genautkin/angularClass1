import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subscribe } from 'src/app/Models/subscribe.model';

@Component({
  selector: 'app-form2',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class Form2Component implements OnInit {

  constructor() { }
  subscribes: Subscribe[] = []

 @Output() onSaveButtonClicked=new EventEmitter<Subscribe[]>();
 @ViewChild('fName') fName?:ElementRef ;
 @ViewChild('email') email?:ElementRef;
 @ViewChild('check') check?:ElementRef;

  ngOnInit(): void {
  }


  MySubmit(
  ): void {
    console.log(this.fName?.nativeElement.value)
    // this.fName?.nativeElement.value 
    // const subVal = new Subscribe(fName.value, email.value, check.checked);
    // this.subscribes.push(subVal);
    // console.log(this.subscribes)
    // this.onSaveButtonClicked.emit(this.subscribes);
  }
}
