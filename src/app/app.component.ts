import { Component } from '@angular/core';

import { AuthService } from './services/auth/auth.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  logged:boolean = false;

  constructor(private authService: AuthService) {}

  logout(){
    this.authService.logout();
    this.logged = false;
  }

  isLogged():boolean {
    return this.authService.isLogged();
  }
}
