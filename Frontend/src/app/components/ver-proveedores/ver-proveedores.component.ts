import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-ver-proveedores',
  templateUrl: './ver-proveedores.component.html',
  styleUrls: ['./ver-proveedores.component.scss']
})
export class VerProveedoresComponent implements OnInit {

  constructor(public router:Router, public Proveedores:ProveedorService) { }
  Nombres: string;
  VectorProveedores: Proveedor[] =[];
  headElements = ['Nombre Proveedor', 'Dirección', 'Telefono','Editar'];

  ngOnInit(): void {
    this.Nombres=localStorage.getItem('Nombres');
    this.Proveedores.obtenerProveedores().subscribe((res:any[])=>{
      console.log(res);
      this.VectorProveedores=res;
     // console.log(this.Usuarios[0].dpi);
    })
  }
  Modifica(id : number){
    for (const Vector of this.VectorProveedores) {
      if(Vector.id==id){
        localStorage.setItem('id_proveedor',""+Vector.id);
        localStorage.setItem('nombre_proveedor',Vector.nombre);
        localStorage.setItem('direccion_proveedor',Vector.direccion);
        localStorage.setItem('telefono_proveedor',Vector.telefono);
        localStorage.setItem('nombre_contacto',Vector.nombre_contacto);
        this.router.navigate(['/administrarProveedor']); //acá va la página de modificación 

      }
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
