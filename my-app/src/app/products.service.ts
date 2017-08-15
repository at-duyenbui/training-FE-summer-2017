import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductsService {

  cart: Array<any>;
  items: number;
  quantity: number;
  public invokeEvent:Subject<any> = new Subject();

  constructor(private http: Http) {
    this.cart = [];
    this.items = 0;
    this.quantity = 0;
  }

  getProducts(): any{
    return this.http.get('./assets/data/data.json')
                .map(res => res.json());
  }

  getDetailProduct = (id: number): any => {
    return this.http.get('./assets/data/data.json')
                .map(res => res.json().products
                  .find(product => product.id === id)
                  );
  }

  addListCart(id: number) {
    this.cart.push(id);
    this.items += 1;
    this.invokeEvent.next(this.items);
  }

  updateTotalItems() {
    return this.invokeEvent;
  }
}