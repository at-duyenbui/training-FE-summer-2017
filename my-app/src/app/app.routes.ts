import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);