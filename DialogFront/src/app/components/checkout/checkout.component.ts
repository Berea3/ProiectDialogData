import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkService} from "../../services/link.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatTooltip} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-checkout',
  standalone: true,
    imports: [
        FormsModule,
        MatCheckbox,
        MatFormField,
        MatIcon,
        MatInput,
        MatLabel,
        MatTooltip,
        ReactiveFormsModule
    ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

    name: string;
    email: string;
    deliveryPoint: string;
    comments: string;

    constructor(private http: HttpClient, private link: LinkService, private router: Router, private cart: CartService) {
    }

    onCheckout()
    {
        const formData: FormData=new FormData();
        formData.append('name',this.name);
        formData.append('email',this.email);
        formData.append('deliveryPoint',this.deliveryPoint);
        formData.append('comments',this.comments);
        formData.append('products',JSON.stringify(this.cart.getProducts()));
        this.http.post(this.link.url+"/products/checkout",formData).subscribe();
        this.router.navigateByUrl("");
    }

}
