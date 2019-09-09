import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string;

  constructor() { }

  login(email, password):void{
    console.log('disparar login ', email, password);
    
  }

}
