import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DetailsComponent} from "./components/details/details.component";
import {CartComponent} from "./components/cart/cart.component";
import {LoginComponent} from "./components/login/login.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: AddProductComponent },
    { path: 'checkout', component: CheckoutComponent },
];
