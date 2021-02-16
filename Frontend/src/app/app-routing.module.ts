import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { AdministrarUsuarioComponent } from './components/administrar-usuario/administrar-usuario.component';
=======
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
>>>>>>> 42dd09465348c4ffa0c43efb9083b0186b50aefe


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
<<<<<<< HEAD
    path: 'administrarUsuario',
    component: AdministrarUsuarioComponent,
=======
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
>>>>>>> 42dd09465348c4ffa0c43efb9083b0186b50aefe
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
