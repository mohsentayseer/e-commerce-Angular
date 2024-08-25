import { ProductCardComponent } from './product-card/product-card.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NOtFoundComponent } from './not-found/not-found.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,title:'Home' },
  {
    path: 'product-page/:id',
    component: ProductPageComponent,
    title: 'product details',
  },
  { path: 'Login', component: LoginComponent,title:'Login' },
  { path: 'Register', component: RegisterComponent,title:'Register' },
  { path: 'Cart', component: CartComponent,title:'Cart' },
  { path: '**', component: NOtFoundComponent,title:'404 Not Found' },
];
