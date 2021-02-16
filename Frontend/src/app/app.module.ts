import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

=======
import { FormsModule } from '@angular/forms';
>>>>>>> 42dd09465348c4ffa0c43efb9083b0186b50aefe
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { AdministrarUsuarioComponent } from './components/administrar-usuario/administrar-usuario.component';
import { FormsModule } from '@angular/forms';

=======
import { RegistroComponent } from './components/registro/registro.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
>>>>>>> 42dd09465348c4ffa0c43efb9083b0186b50aefe
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    AdministrarUsuarioComponent
=======
    RegistroComponent,
    LoginComponent,
    PrincipalComponent
>>>>>>> 42dd09465348c4ffa0c43efb9083b0186b50aefe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
    RouterModule
>>>>>>> 42dd09465348c4ffa0c43efb9083b0186b50aefe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
