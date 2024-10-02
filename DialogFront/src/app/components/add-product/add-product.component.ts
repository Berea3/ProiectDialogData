import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../header/header.component";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatTooltip} from "@angular/material/tooltip";
import {Product} from "../../entities/Product";
import {HttpClient} from "@angular/common/http";
import {LinkService} from "../../services/link.service";
import {Portal} from "@angular/cdk/portal";

@Component({
  selector: 'app-add-product',
  standalone: true,
    imports: [
        FormsModule,
        HeaderComponent,
        MatCheckbox,
        MatFormField,
        MatIcon,
        MatInput,
        MatLabel,
        MatTooltip,
        ReactiveFormsModule
    ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

    product: Product=new Product();

    constructor(private http: HttpClient, private link: LinkService) {
    }

    addProduct()
    {
        this.http.post(this.link.url+"/products/create",this.product).subscribe();
        this.product=new Product();
    }
}
