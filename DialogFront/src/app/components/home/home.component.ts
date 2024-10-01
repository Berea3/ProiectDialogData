import { Component } from '@angular/core';
import {Product} from "../../entities/Product";
import {LinkService} from "../../services/link.service";
import {HttpClient} from "@angular/common/http";
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
    MatTable
} from "@angular/material/table";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        MatTable,
        MatColumnDef,
        MatCell,
        MatHeaderCell,
        MatHeaderCellDef,
        MatCellDef,
        MatHeaderRow,
        MatRow,
        MatRowDef,
        MatHeaderRowDef,
        HeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    products: Product[]=[];

    displayedColumns: string[] = ['brand', 'model', 'price', 'inStock','weight'];
    dataSource = this.products;

    constructor(private link: LinkService, private http: HttpClient, private router: Router) {
    }

    ngOnInit()
    {
        this.http.get(this.link.url+"/products/getAll").subscribe(
            (data: any)=>{
                this.products=data;
                console.log(this.products);
            }
        )
    }

    goToProduct(id: string)
    {
        this.router.navigateByUrl('details/'+id);
    }
}
