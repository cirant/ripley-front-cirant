import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    if(!this.authService.token){
      this.router.navigate(['']);
    }
   }

   getHeader():Object {
     return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.token}`,
      })
    };
   }

   getProductList():Observable<Object> {
     try {
       const httpOptions = this.getHeader();
       return this.http.get(`${environment.urlApi}/product`, httpOptions)
     } catch (e){
       console.log('error en get product list ', e);
     }
   }

   getProductDetails(sku):Observable<Object> {
     try {
        const httpOptions = this.getHeader();
       return this.http.get(`${environment.urlApi}/product/${sku}`, httpOptions)
     } catch (e){
       console.log('error en get details ', e);
     }
   }

   handlerError():void {
    this.router.navigate(['']);
   }

}
