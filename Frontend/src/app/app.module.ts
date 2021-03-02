import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';

import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';

import { AdministrarUsuarioComponent } from './components/administrar-usuario/administrar-usuario.component';
import { FormsModule } from '@angular/forms';

import { RegistroComponent } from './components/registro/registro.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdministrarProveedorComponent } from './components/administrar-proveedor/administrar-proveedor.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModificarUsuarioComponent,
    AdministrarUsuarioComponent,
    RegistroComponent,
    LoginComponent,
    PrincipalComponent,
    AdministrarProveedorComponent,
    RegistroProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
