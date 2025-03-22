import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JLayoutComponent } from '../../containers/j-layout/j-layout.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: JLayoutComponent,
    children: [
      { path: '', component: DefaultComponent },
      { path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
