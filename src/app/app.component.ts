import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  number = 5
  menuId = 0;
  menu(id:number){
    this.menuId = id;
    console.log (this.menuId);
  }
}
