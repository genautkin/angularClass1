import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './main/mycomponent/mycomponent.component';
import { MycomponentComponent2 } from './main/mycomponent2/mycomponent2.component';
import { Mycomponent3Component } from './main/mycomponent3/mycomponent3.component';
import { Mycomponent4Component } from './main/mycomponent4/mycomponent4.component';
import { NameComponent } from './main/name/name.component';
import { WaterMarkComponent } from './main/water-mark/water-mark.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './main/form/form.component';
import { Form2Component } from './main/form2/form.component';
import { CardsmainCardsComponent } from './cardsmain-cards/cardsmain-cards.component';
import { CardscardComponent } from './cardscard/cardscard.component';
import { CounterComponent } from './counter/counter.component';
import { CounterbuttonsComponent } from './counterbuttons/counterbuttons.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModelExComponent } from './ng-model-ex/ng-model-ex.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    MycomponentComponent2,
    Mycomponent3Component,
    Mycomponent4Component,
    NameComponent,
    WaterMarkComponent,
    FormComponent,
    Form2Component,
    CardsmainCardsComponent,
    CardscardComponent,
    CounterComponent,
    CounterbuttonsComponent,
    NavbarComponent,
    NgModelExComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
