import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class IfUserLogin implements CanActivate {
  constructor() {}


  canActivate(
  ): boolean{
    
    return false
  }
}