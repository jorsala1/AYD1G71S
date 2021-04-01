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
  Producto_Cantidad : number[][] =[]; //id producto, cantidad
  ProductosElegidos : number []=[];
  VectorProductos: Producto[] =[];
  headElements = ['Nombre Producto', 'Descripción', 'Cantidad','Precio Venta','Precio Compra','Comprar'];
  habilitacion: string;
  contador:number;

  ngOnInit(): void {
    this.Nombres=localStorage.getItem('Nombres');
    this.habilitacion=localStorage.getItem('Rol');
    this.contador = Number(localStorage.getItem("contadorp"));
    if (this.habilitacion =="1"){
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarUsuario\" >Admin Usuarios</a> <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"modificarUsuario\" >Modificar mis datos</a> <div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"verProveedores\" >Ver Proveedores</a> <div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"registroProveedor\" >Agregar Proveedor</a> <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarProveedor\" >Admin Proveedor</a> <div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"agregarProducto\" >Agregar Producto</a>";

     }else{
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"modificarUsuario\" >Modificar Datos</a> ";
    }

    this.Producto.obtenerProductos().subscribe((res:any[])=>{
      
      this.VectorProductos=res;
     // console.log(this.Usuarios[0].dpi);
    })
  }
  Logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  AgregarCarrito(id: number){
    this.contador++;
    let cantidad =0;
    localStorage.setItem("contadorp",this.contador+"");
    if(this.VerificarCantidad(id)){
      for (const p of this.Producto_Cantidad) {
        if(p[0]==id){
          cantidad= p[1];
          cantidad++;
          p[1]=cantidad;
        }
      }
    }else {
      this.ProductosElegidos.push(id);
      this.Producto_Cantidad.push([id,1]);
    }
    console.log(this.Producto_Cantidad);
  }
  Comprar(){
    
  }

  VerificarCantidad(id:number):boolean{
    for (const prod of this.ProductosElegidos) {
      if(prod == id ){      
        return true;
      }
    }
    return false;
  }

}
