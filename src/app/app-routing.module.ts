import {CounterComponent} from './counter/counter.component';
import { Routes, RouterModule } from '@angular/router';
import { CardsmainCardsComponent } from './cardsmain-cards/cardsmain-cards.component';
import { Page404Component } from './main/page404/page404.component';
import { NgModelExComponent } from './ng-model-ex/ng-model-ex.component';
import { IfUserLogin } from './services/ifUserLoginGuard';


const arr: Routes = [

    {path:'' , redirectTo: 'cards', pathMatch: 'full'},
   // {path: '', component: CounterComponent},
   {path: 'cards', component: CardsmainCardsComponent,canActivate: [IfUserLogin]},
   {path: 'cards/:name', component: NgModelExComponent},
    {path: 'counter', component: CounterComponent},
    {path: '**', component:Page404Component}

];

export const routing = RouterModule.forRoot(arr);