import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cardscard',
  templateUrl: './cardscard.component.html',
  styleUrls: ['./cardscard.component.css']
})
export class CardscardComponent implements OnInit {

  constructor() { }
  @Input() cardId:number = 0;
  @Input() index:number = 0;
  @Output() onDelClicked=new EventEmitter<number>();

  ngOnInit(): void {
  }
  del(){
    this.onDelClicked.emit(this.index)
  }

}
