import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule,
        FormsModule,
        MatButton
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    username: string;
    password: string;

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit()
    {
        const formData : FormData=new FormData();
        formData.append('username',this.username);
        formData.append('password',this.password);
        this.http.post('http://localhost:1443/login',formData).subscribe(
            (response: any)=>{
                if (response['loggedin']==false)
                {
                    alert("wrong credentials");
                }
                else
                {
                    sessionStorage.setItem("loggedin","true");
                    this.router.navigateByUrl("/add");
                }
            }
        );
        console.log("dassd");
    }
}
