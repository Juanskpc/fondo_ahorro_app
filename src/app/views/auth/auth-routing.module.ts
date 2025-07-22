import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { JLayoutSinComponent } from '../../containers/j-layout-sin';
import { RestablecerPwComponent } from './restablecer-pw/restablecer-pw.component';

const routes: Routes = [
    {   
        path: '',
        component: JLayoutSinComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'restablecer',
                component: RestablecerPwComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
