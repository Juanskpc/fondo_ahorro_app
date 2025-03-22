import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JLayoutSinComponent } from "./j-layout-sin";
import { DashboardComponent } from "../views/dashboard/dashboard.component";
import { LoginComponent } from "../views/auth/login/login.component";

const routes: Routes = [
    {
        path: '',
        component: JLayoutSinComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'default',
        loadChildren: () => import('../views/default/default.module').then( m => m.DefaultModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class JLayoutRoutingModule { }