import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-mark',
  templateUrl: './water-mark.component.html',
  styleUrls: ['./water-mark.component.css']
})
export class WaterMarkComponent implements OnInit {

  constructor() { }
  @Input() src: string = '';
  ngOnInit(): void {
  }

}
