import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting  } from '../app/app.routes';

import { ServiceZeusService } from '../app/servicios/service-zeus.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MainUserHomeComponent } from './Componentes/main-user-home/main-user-home.component';
import { MainAnonymousHomeComponent } from './Componentes/main-anonymous-home/main-anonymous-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainUserHomeComponent,
    MainAnonymousHomeComponent,

  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [ServiceZeusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
