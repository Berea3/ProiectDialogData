import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        MatIcon,
        RouterLink,
        NgIf
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    loggedIn()
    {
        console.log(sessionStorage.getItem("loggedin"));
        if (sessionStorage.getItem("loggedin")=="true")
        {
            return true;
        }
        return false;
    }
}
