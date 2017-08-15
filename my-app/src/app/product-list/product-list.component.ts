import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [];
  sub: any;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.sub = this.productsService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products || [];
      }
    );
  }

  addCart(id: number) {
    this.productsService.addListCart(id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
