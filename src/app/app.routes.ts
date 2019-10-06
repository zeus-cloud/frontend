import { LoginComponent } from '../app/Componentes/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MainAnonymousHomeComponent} from '../app/Componentes/main-anonymous-home/main-anonymous-home.component';
import { Component } from '@angular/core';


const routes: Routes = [
  { path: 'homeAnonima', component: MainAnonymousHomeComponent },
  { path: 'login',       component: LoginComponent }
]

export const appRouting  = RouterModule.forRoot(routes);
