import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsmain-cards',
  templateUrl: './cardsmain-cards.component.html',
  styleUrls: ['./cardsmain-cards.component.css']
})
export class CardsmainCardsComponent implements OnInit {

  constructor() { }
  cards:number[] = []
  ngOnInit(): void {
    for (let i =200 ; i<300; i++) {
      this.cards.push(i);
    }
  }
  onDelClicked(index:number): void {
    this.cards.splice(index, 1);    
  }
}
