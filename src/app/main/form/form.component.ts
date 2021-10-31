import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscribe } from 'src/app/Models/subscribe.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  subscribes: Subscribe[] = []

 @Output() onSaveButtonClicked=new EventEmitter<Subscribe[]>();

  ngOnInit(): void {
  }


  MySubmit(
    fName: HTMLInputElement, 
    email: HTMLInputElement,
    check: HTMLInputElement
  ): void {
    const subVal = new Subscribe(fName.value, email.value, check.checked);
    this.subscribes.push(subVal);
    console.log(this.subscribes)
    this.onSaveButtonClicked.emit(this.subscribes);
  }
}
