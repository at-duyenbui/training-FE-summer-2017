import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { ProductsService } from './products.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { SharedComponent } from './shared/shared.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartListComponent,
    SharedComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    routing
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
