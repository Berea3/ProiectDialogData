import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

    url: string="http://localhost:1443";

    constructor() { }
}
