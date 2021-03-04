import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-administrar-proveedor',
  templateUrl: './administrar-proveedor.component.html',
  styleUrls: ['./administrar-proveedor.component.scss']
})
export class AdministrarProveedorComponent implements OnInit {

  constructor(private proveedor:ProveedorService) { }

  nombre: string="";
  direccion: string="";
  telefono: string=""; 
  nombre_contacto: string="";
  id: string="";

  ngOnInit(): void {
    this.id = localStorage.getItem('id_proveedor')
    this.nombre = localStorage.getItem('nombre_proveedor')
    this.direccion = localStorage.getItem('direccion_proveedor')
    this.telefono = localStorage.getItem('telefono_proveedor')
    this.nombre_contacto = localStorage.getItem('nombre_contacto')
  }

  limpiar(){
    this.nombre ="";
    this.direccion="";
    this.telefono=""; 
    this.nombre_contacto="";
  }

  darBajaProveedor(){
    this.proveedor.delete(this.id).subscribe(
      res => {
        console.log(res);
        this.limpiar();
      },
      err => console.error(err)
    );
  }

  modificar(){
    console.log("se va a modificar a " + this.id)
    this.proveedor.update(this.id,this.nombre,this.direccion,this.telefono,this.nombre_contacto)
    .subscribe((res)=>{
      console.log("ya modifico");
      console.log(res);      
    })
  }

}
