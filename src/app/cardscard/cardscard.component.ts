import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cardscard',
  templateUrl: './cardscard.component.html',
  styleUrls: ['./cardscard.component.css']
})
export class CardscardComponent implements OnInit {

  constructor() { }
  @Input() url:string = '';
  @Input() cardId:number = 0;
  @Input() index:number = 0;
  @Output() onDelClicked=new EventEmitter<number>();

  color = '#'+Math.floor(Math.random()*16777215).toString(16)
  loading = false;


  ngOnInit(): void {
  }
  del(){
    this.onDelClicked.emit(this.index)
  }

  border():string[] {
     if (Math.random() < 0.5) {
      return ['bordered']
    }
    return []
  }

}
