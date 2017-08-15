import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products: Array<any> = [];
  ids: Array<any> = [];
  quantity: any;
  totalPrice: any;
  sub: any;

  constructor(private service: ProductsService) {
    this.quantity = 1;
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.ids = this.service.cart;
    for (var i = 0; i < this.ids.length; i++){
      this.sub = this.service.getDetailProduct(this.ids[i]).subscribe(
        (data: any) => {
            this.totalPrice += data.price * this.quantity;
            this.products.push({data, quantity: this.quantity});
          }
        );
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}