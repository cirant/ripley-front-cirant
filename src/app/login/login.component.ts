import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkoutForm

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { 
      this.checkoutForm = this.formBuilder.group({
        email: 'cirant3002@gmail.com',
        password: '12345678'
      });
    }

    async login(customerData) {
      if(await this.authService.login(customerData.email, customerData.password)){
        this.router.navigate(['/products']);
      }else {
        // @TODO mostrar algun error
      }
    }

  ngOnInit() {
  }

}
