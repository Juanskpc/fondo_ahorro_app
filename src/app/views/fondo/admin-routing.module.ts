import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { JLayoutComponent } from '../../containers/j-layout/j-layout.component';
import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';

const routes: Routes = [
    {   
        path: '',
        component: JLayoutComponent,
        children: [
            {
                path: 'listado-prestamos',
                component: ListaPrestamosComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
