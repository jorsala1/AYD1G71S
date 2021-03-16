import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.scss']
})
export class RegistroProveedorComponent implements OnInit {

  constructor(private proveedor:ProveedorService,public router: Router) { }
  Nombres: string;
  nombre: string="";
  contacto: string="";
  telefono: string="";
  direccion: string="";
  habilitacion: string;
  
  ngOnInit(): void {
    this.Nombres=localStorage.getItem('Nombres');
    this.habilitacion=localStorage.getItem('Rol');
    if (this.habilitacion =="1"){
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarUsuario\" >Admin Usuarios</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"modificarUsuario\" >Modificar mis datos</a>";      
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"verProveedores\" >Ver Proveedores</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarProveedor\" >Admin Proveedor</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"agregarProducto\" >Agregar Producto</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"VerProductosAdmin\" >Admin Producto</a>";
    }else{
      this.habilitacion="";
    }
  }

  registrarse(){
    // console.log(this.fechanac);
     this.proveedor.RegistroProveedor(this.nombre,this.direccion,this.telefono,this.contacto)
     .subscribe((res)=>{
       console.log("ya insertó");
       console.log(res);    
       alert("PROVEEDOR REGISTRADO CON ÉXITO");
       this.nombre="";
       this.direccion="";
       this.telefono=""; 
       this.contacto="";
     },
     err => {alert("NO SE PUDO REGISTRAR EL PROVEEDOR")}  
     )
  
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
