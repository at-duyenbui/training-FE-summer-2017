import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  totalItems: number;

  constructor(private service: ProductsService) {
    this.totalItems = 0;
  }

  ngOnInit() {
    this.service.updateTotalItems().subscribe(
      (data: any) => {
        this.totalItems = data;
      }
    );
  }

}
