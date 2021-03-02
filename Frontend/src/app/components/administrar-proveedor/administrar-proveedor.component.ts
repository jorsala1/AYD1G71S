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
    this.proveedor.update(this.id,this.nombre,this.direccion,this.telefono,this.nombre_contacto)
    .subscribe((res)=>{
      console.log("ya modifico");
      console.log(res);      
    })
  }

}
