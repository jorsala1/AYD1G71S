import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos-clientes',
  templateUrl: './productos-clientes.component.html',
  styleUrls: ['./productos-clientes.component.scss']
})
export class ProductosClientesComponent implements OnInit {

  constructor(public router:Router, public Producto:ProductoService) { }
  Nombres: string;
  VectorProductos: Producto[] =[];
  headElements = ['Nombre Producto', 'Descripción', 'Cantidad','Precio Venta','Precio Compra','Comprar'];
  habilitacion: string;

  ngOnInit(): void {
    this.Nombres=localStorage.getItem('Nombres');
    this.habilitacion=localStorage.getItem('Rol');

    if (this.habilitacion =="1"){
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarUsuario\" >Admin Usuarios</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"modificarUsuario\" >Modificar mis datos</a>";      
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"verProveedores\" >Ver Proveedores</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"registroProveedor\" >Agregar Proveedor</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarProveedor\" >Admin Proveedor</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"agregarProducto\" >Agregar Producto</a>";
      
     }else{
      this.habilitacion="";
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"modificarUsuario\" >Modificar Datos</a>";
    }

    this.Producto.obtenerProductos().subscribe((res:any[])=>{
      console.log(res);
      this.VectorProductos=res;
     // console.log(this.Usuarios[0].dpi);
    })
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
