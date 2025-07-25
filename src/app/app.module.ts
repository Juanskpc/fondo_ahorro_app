import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JLayoutComponent } from './containers/j-layout/j-layout.component';
import { JLayoutSinComponent } from './containers/j-layout-sin/j-layout-sin.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ServiceModule } from './app-core/services/services.module';
import { tokenInterceptor } from './app-core/services/app-admin/seguridad/http-interceptors/auth.interceptor';
import { JLayoutModule } from './containers/j-layout.module';
import { AuthModule } from './views/auth/auth.module';
import { AdminModule } from './views/fondo/admin.module';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceModule,
    JLayoutModule,
    AuthModule,
    AdminModule
  ],
  providers: [
    provideHttpClient
    (withInterceptors([tokenInterceptor])),
    { provide: LOCALE_ID, useValue: 'es'
      // LocationStrategy, 
      // useClass: PathLocationStrategy 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
