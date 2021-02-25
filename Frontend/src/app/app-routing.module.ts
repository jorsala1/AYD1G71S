import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModificarUsuarioComponent } from './components/modificar-usuario/modificar-usuario.component';

import { AdministrarUsuarioComponent } from './components/administrar-usuario/administrar-usuario.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdministrarProveedorComponent } from './components/administrar-proveedor/administrar-proveedor.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'modificarUsuario',
    component: ModificarUsuarioComponent,
  },
  {
    path: 'administrarUsuario',
    component: AdministrarUsuarioComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'administrarProveedor',
    component: AdministrarProveedorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
