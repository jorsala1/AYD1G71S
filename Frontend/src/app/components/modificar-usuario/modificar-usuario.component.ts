import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent implements OnInit {

  constructor(
      private user:UsuarioService
    ) { }

  nombre: string="";
  password: string="";
  apellidos: string=""; 
  correo: string="";
  telefono: string="";
  foto: string=""; 
  genero: string="";
  fechanac: string="";
  direccion: string="";
  username : string="";
  uploadedFiles: Array <File>;
  fotografia: string="";

  ngOnInit(): void {
    this.username = localStorage.getItem('Username')
    if (this.username != "") {
      this.user.getUsuario(this.username).subscribe((res)=>{
        let u = (res['user']);
        this.nombre = u['Nombres'];
        this.apellidos = u['Apellidos'];
        this.correo = u['Correo'];
        this.password = u['Password'];
        this.genero = u['Genero'];
        this.fechanac = u['Fecha_Nacimiento'].substring(0, 10);
        console.log(u);
      })
    }
  }

  modificar(){
    this.user.update(this.username,this.nombre,this.apellidos,this.correo,this.password,this.genero, this.fechanac)
    .subscribe((res)=>{
      console.log("ya modifico");
      console.log(res);      
    })
  }

  Genero(tipo:string){
    if(tipo=="m"){
      this.genero='M';
    }else if(tipo=="f"){
      this.genero='F';
    }
  }

}
