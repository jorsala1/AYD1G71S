import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor( public router: Router) { }
  Nombres: string;
  habilitacion: string;
  
  ngOnInit(): void {
    this.Nombres=localStorage.getItem('Nombres');
    this.habilitacion=localStorage.getItem('Rol');

    if (this.habilitacion =="1"){
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarUsuario\" >Usuarios</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"registroProveedor\" >RegistrarProveedor</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"verProveedores\" >VerProveedores</a>";

    }else{
      this.habilitacion="";
    }


   
  }


  Logout(){
    localStorage.removeItem('llave');
    localStorage.removeItem('CodigoUsuario');
    localStorage.removeItem('Username');
    localStorage.removeItem('Nombres');
    localStorage.removeItem('Apellidos');
    localStorage.removeItem('Correo');
    localStorage.removeItem('Password');
    localStorage.removeItem('Fecha_Nac');
    this.router.navigate(['login']);
  }
}
