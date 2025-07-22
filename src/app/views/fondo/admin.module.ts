import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';

import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        ListaPrestamosComponent
    ],
    imports: [
        CommonModule,
        InputIconModule,
        IconFieldModule,
        InputTextModule,
        TableModule,
        AdminRoutingModule
    ]
})
export class AdminModule { }
