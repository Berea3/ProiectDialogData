import { Injectable } from '@angular/core';
import {Product} from "../entities/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

    products: Product[]=[];

    constructor() { }

    addProduct(product: Product)
    {
        this.products.push(product);
        console.log(this.products);
    }

    getProducts()
    {
        console.log("cart");
        console.log(this.products);
        return this.products;
    }
}
