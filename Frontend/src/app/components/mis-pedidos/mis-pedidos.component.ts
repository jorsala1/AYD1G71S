import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoService } from 'src/app/services/producto.service';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss']
})
export class MisPedidosComponent implements OnInit {

  constructor(public router:Router, public Producto:ProductoService) { }

  Nombres: string;
  VectorPedidos: Pedido[] =[];
  headElements = ['Numero Pedido', 'Username', 'Nombres','Apellidos','Fecha Pedido', 'Monto','Estado'];
  habilitacion: string;
  idc: number;
  id:string = "";

  ngOnInit(): void {
    this.Nombres=localStorage.getItem('Nombres');
    this.habilitacion=localStorage.getItem('Rol');

    if (this.habilitacion =="1"){
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarUsuario\" >Admin Usuarios</a>  <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"modificarUsuario\" >Modificar mis datos</a> <div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"verProveedores\" >Ver Proveedores</a> <div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"registroProveedor\" >Agregar Proveedor</a> <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarProveedor\" >Admin Proveedor</a> <div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"agregarProducto\" >Agregar Producto</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"ReporteStock\" >Stock Productos</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"ProductoMasVendido\" >Producto Más Vendido</a>";
    }else{
      this.habilitacion="";
    }

    this.id = localStorage.getItem('CodigoUsuario'); 

    this.Producto.obtenerPedidoCliente(Number(this.id)).subscribe((res:any[])=>{
      this.VectorPedidos=res;
      console.log(res);
     // console.log(this.Usuarios[0].dpi);
    })
  }

  Logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
