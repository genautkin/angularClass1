import { Component, OnInit } from '@angular/core';
import { SpinerService } from '../services/spiner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor( private spinnerServ:SpinerService) { }
  ngOnInit(): void {
    this.spinnerServ.spinnerStatus.subscribe(data =>{
      console.log(data)
      this.showSpinner = data;
    })
  }
  showSpinner:boolean = true;

  hideSpinner(){
    this.spinnerServ.setStatus(false);
  }

}
