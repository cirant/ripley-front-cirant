import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkoutForm

  constructor(
    private formBuilder: FormBuilder,
    ) { 
      this.checkoutForm = this.formBuilder.group({
        email: 'cirant3002@gmail.com',
        password: '12345678'
      });
    }

    login(customerData) {
      console.warn('Your order has been submitted', customerData);
    }

  ngOnInit() {
  }

}
