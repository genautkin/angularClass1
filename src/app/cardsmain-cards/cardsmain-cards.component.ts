import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FontService } from '../services/font.service';
import { SpinerService } from '../services/spiner.service';

@Component({
  selector: 'app-cardsmain-cards',
  templateUrl: './cardsmain-cards.component.html',
  styleUrls: ['./cardsmain-cards.component.css']
})
export class CardsmainCardsComponent implements OnInit {
  loading: boolean = false;

  constructor(public http: HttpClient,
    private myService:FontService,
    private spinnerServ:SpinerService) { }
  cards:number[] = []
  urlImgArr:string[] = []
  ngOnInit(): void {
    this.makePostRequest()
    console.log(this.myService.fontSize)
    this.myService.fontSize = 1000;
    this.spinnerServ.setStatus(true);
    //this.makePostRequest2()
    // for (let i =200 ; i<300; i++) {
    //   this.cards.push(i);
    // }

    var arrayPromises = [];
    for (let i = 0; i < 20 ;i++) {
      arrayPromises.push(this.makeRequest());
    }
    Promise.all(arrayPromises).then((data)=>{
      this.urlImgArr = data;
      this.spinnerServ.setStatus(false);
    })

  }
  onDelClicked(index:number): void {
    this.cards.splice(index, 1);    
  }
  makeRequest(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
      .get('https://picsum.photos/200/200')
      .subscribe(data => console.log('success', data),
      error => resolve(error.url))
    })
    }

    makePostRequest(): void {
      this.loading = true;
       const headers: HttpHeaders = new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8'});
      this.http
      .post<any>('https://jsonplaceholder.typicode.com/posts',JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),{headers:headers}
      )
      .subscribe(data => {
        if (data && data.body && data.id) {
          console.log('success', data.body)
        }
      },
      error => console.log('error', error));
      }

      makePostRequest2(): void {
        this.loading = true;
         const headers: HttpHeaders = new HttpHeaders({
          'Content-type': 'application/json; charset=UTF-8'});
          const req = new HttpRequest(
            'post',
            'https://jsonplaceholder.typicode.com/posts',
            JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            {headers:headers});
           this.http.request(req).subscribe(data => {
             if (data) 
               console.log('success',data)
               });
        }



}
