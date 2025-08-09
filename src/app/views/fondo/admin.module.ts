import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';
import { AdminRoutingModule } from './admin-routing.module';

import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel'
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';


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
        AdminRoutingModule,
        PanelModule,
        TooltipModule,
        TagModule,
        DialogModule,
        AutoCompleteModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
