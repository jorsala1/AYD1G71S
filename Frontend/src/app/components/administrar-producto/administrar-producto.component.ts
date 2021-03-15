import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Categoria } from 'src/app/models/producto';

@Component({
  selector: 'app-administrar-producto',
  templateUrl: './administrar-producto.component.html',
  styleUrls: ['./administrar-producto.component.scss']
})
export class AdministrarProductoComponent implements OnInit {

  constructor(public SProductos:ProductoService,public router: Router) { }

  cat: string ="Categoría";
  listacat : Categoria[]=[];
  Nombres: string;
  habilitacion: string;
  nombre_prod :string="";
  descripcion: string="";
  cantidad:  number;
  precio_compra: number;
  precio_venta:  number;
  categoria:  number;
  id: string = "";

  headElements = ['Nombre Proveedor', 'Dirección', 'Telefono','Editar'];

  ProductoEnviar = {
    nombre_prod : '',
    descripcion:'',
    cantidad: 0,
    precio_compra: 0,
    precio_venta: 0,
    categoria: 0
  };

  ngOnInit(): void {
    this.Nombres=localStorage.getItem('Nombres');
    this.habilitacion=localStorage.getItem('Rol');
    if (this.habilitacion =="1"){
      this.habilitacion="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarUsuario\" >Admin Usuarios</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"modificarUsuario\" >Modificar mis datos</a>";      
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"verProveedores\" >Ver Proveedores</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div>    <a class=\"dropdown-item\"  href=\"registroProveedor\" >Agregar Proveedor</a>";
      this.habilitacion+="<div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"administrarProveedor\" >Admin Proveedor</a>";
     }else{
      this.habilitacion="";
    }

    this.SProductos.obtenerCategorias().subscribe((res:any[])=>{
      console.log(res);
      this.listacat=res;
    })
  }

  EligeCategoria(idcategoria:number){
    this.categoria = Number(idcategoria);
    for (const x of this.listacat) {
      if(x.id==idcategoria){
        this.cat=x.categoria;
      }
    }
  }

  Actualizar(){
    console.log("se va a modificar a " + this.id)
    this.SProductos.update(this.id, this.nombre_prod,this.descripcion,Number(this.cantidad),Number(this.precio_compra), Number(this.precio_venta), Number(this.categoria))
    .subscribe((res)=>{
      console.log("ya modifico");
      console.log(res);      
    })
  }

  Eliminar(){
    this.SProductos.delete(this.id).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
