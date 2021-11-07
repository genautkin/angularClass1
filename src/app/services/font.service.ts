import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontService {

  fontSize: number = 10;
  constructor() { 
    console.log('Service start')
  }
}
