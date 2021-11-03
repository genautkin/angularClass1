import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsmain-cards',
  templateUrl: './cardsmain-cards.component.html',
  styleUrls: ['./cardsmain-cards.component.css']
})
export class CardsmainCardsComponent implements OnInit {
  loading: boolean = false;

  constructor(public http: HttpClient) { }
  cards:number[] = []
  urlImgArr:string[] = []
  ngOnInit(): void {
    for (let i =200 ; i<300; i++) {
      this.cards.push(i);
    }
    for (let i = 0; i < 100 ;i++) {
      this.makeRequest()
    }
  }
  onDelClicked(index:number): void {
    this.cards.splice(index, 1);    
  }
  makeRequest(): void {
    this.loading = true;
    this.http
    .get('https://picsum.photos/200/200')
    .subscribe(data => console.log('success', data),
    error => this.urlImgArr.push(error.url));
    }
}
