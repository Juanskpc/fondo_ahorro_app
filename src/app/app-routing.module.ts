import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './app-core/services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/auth/auth.module').then( m => m.AuthModule),
    // canActivate: [ authGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
