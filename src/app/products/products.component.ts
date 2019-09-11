import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';

interface Details {
  attributes: Array<any>;
  thumbnail: String;
  price: Object
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  list:Array<any>;
  loading:boolean = false;
  details:Details;
  title:String;

  constructor(private productService: ProductService) {
    this.setDefault();
  }

  ngOnInit() {
    this.getProducts();
  }

  setDefault(){
    this.title = 'productos Ripley';
    this.details = null;
  }

  getProducts() {
    this.loading = true;
    this.productService.getProductList().subscribe(res => {
      this.loading = false;
      this.list = res['data'];
    }, err => {
      this.loading = false;
      this.productService.handlerError();
    });
  }

  getDetails(sku):void {
    this.loading = true;
    this.productService.getProductDetails(sku).subscribe(res => {
      this.loading = false;
      const attributes = res['data']['attributes'].map(item => {
        return {
          name: item.name,
          value: item.value
        }
      });

      this.details = {
        attributes: attributes,
        thumbnail: res['data']['thumbnailImage'],
        price: res['data']['prices']
      };
      
      this.title = res['data']['shortDescription'];
    }, err => {
      this.loading = false;
      this.productService.handlerError();
    });
  }

  goBack():void {
    this.getProducts();
    this.setDefault();
  }

}
