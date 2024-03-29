import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AngularFireAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
