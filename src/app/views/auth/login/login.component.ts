import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    year!: number;

    constructor(){
        this.year = new Date().getFullYear();
    }

    ngOnInit(): void {
        
    }

}
