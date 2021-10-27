import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './main/mycomponent/mycomponent.component';
import { MycomponentComponent2 } from './main/mycomponent2/mycomponent2.component';
import { Mycomponent3Component } from './main/mycomponent3/mycomponent3.component';
import { Mycomponent4Component } from './main/mycomponent4/mycomponent4.component';
import { NameComponent } from './main/name/name.component';
import { WaterMarkComponent } from './main/water-mark/water-mark.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './main/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    MycomponentComponent2,
    Mycomponent3Component,
    Mycomponent4Component,
    NameComponent,
    WaterMarkComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
