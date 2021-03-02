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
  nombre: string="";
  contacto: string="";
  telefono: string="";
  direccion: string="";
  
  ngOnInit(): void {
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
}
