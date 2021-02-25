import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.scss']
})
export class RegistroProveedorComponent implements OnInit {

  constructor() { }
  nombre: string="";
  contacto: string="";
  telefono: string="";
  direccion: string="";
  ngOnInit(): void {
  }

}
