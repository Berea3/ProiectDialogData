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
    MatTable, MatTableDataSource
} from "@angular/material/table";
import {HeaderComponent} from "../header/header.component";
import {MatIcon} from "@angular/material/icon";
import {DataSource} from "@angular/cdk/collections";

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
        HeaderComponent,
        MatIcon
    ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

    displayedColumns: string[] = ['brand', 'model', 'price', 'inStock','weight','remove'];

    products: Product[]=[];

    dataSource = new MatTableDataSource<Product>();

    constructor(private http: HttpClient, private link: LinkService, private cart: CartService) {
    }

    ngOnInit()
    {
        console.log(this.cart.getProducts());
        this.products=this.cart.getProducts();
        this.dataSource.data=this.products;
        // console.log(this.products);
    }

    removeProduct(i: number)
    {
        console.log(i);
        this.products.splice(i,1);
        this.dataSource.data=this.products;
        console.log(this.products);
    }
}
