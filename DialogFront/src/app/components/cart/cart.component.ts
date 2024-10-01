import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkService} from "../../services/link.service";
import {Product} from "../../entities/Product";
import {CartService} from "../../services/cart.service";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef, MatHeaderRow,
    MatHeaderRowDef, MatRow, MatRowDef,
    MatTable
} from "@angular/material/table";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-cart',
  standalone: true,
    imports: [
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatCell,
        MatCellDef,
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatHeaderRow,
        MatRow,
        MatRowDef,
        HeaderComponent
    ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

    displayedColumns: string[] = ['brand', 'model', 'price', 'inStock','weight'];

    products: Product[]=[];

    constructor(private http: HttpClient, private link: LinkService, private cart: CartService) {
    }

    ngOnInit()
    {
        console.log(this.cart.getProducts());
        this.products=this.cart.getProducts();
        // console.log(this.products);
    }
}
