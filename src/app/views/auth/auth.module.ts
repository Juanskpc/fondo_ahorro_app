import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';
import { RestablecerPwComponent } from './restablecer-pw/restablecer-pw.component';


@NgModule({
    declarations: [
        LoginComponent,
        RestablecerPwComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        InputIconModule,
        IconFieldModule,
        InputTextModule
    ]
})
export class AuthModule { }
