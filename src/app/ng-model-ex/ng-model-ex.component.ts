import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ng-model-ex',
  templateUrl: './ng-model-ex.component.html',
  styleUrls: ['./ng-model-ex.component.css']
})
export class NgModelExComponent implements OnInit {

  constructor(public http: HttpClient,
    private activatedRoute:ActivatedRoute) { }

  form = {
    email: 'sdsdsdsdds',
    password: 'sdsddssdsd'
  }
  loading:boolean = false
  data:any
  ngOnInit(): void {
    this.makeRequest()
    this.activatedRoute.params.subscribe(parameter => {
       console.log(parameter.name)
    })
  }
  
  makeRequest(): void {
     this.loading = true;
     this.http
     .get('https://jsonplaceholder.typicode.com/posts/1')
     .subscribe(data => {
     this.data = data;
     this.loading = false;
     console.log (this.data)
     });
     }

  save() {
    console.log(this.form)
  }

}
