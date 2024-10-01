import { Component } from '@angular/core';
import {Product} from "../../entities/Product";
import {LinkService} from "../../services/link.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-details',
  standalone: true,
    imports: [
        MatFormField,
        MatInput,
        FormsModule,
        MatLabel,
        MatCheckbox,
        MatTooltip,
        MatIcon
    ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

    product: Product=new Product();

    constructor(private link: LinkService, private http: HttpClient, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit()
    {
        this.http.get(this.link.url+"/products/getById/"+this.activatedRoute.snapshot.params['id']).subscribe(
            (data: any)=>{
                this.product=data;
                console.log(this.product);
            }
        )
    }

    addProduct()
    {
        console.log("product added");
    }
}
