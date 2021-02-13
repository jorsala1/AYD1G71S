import { Component, OnInit } from '@angular/core';
//import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent implements OnInit {

  constructor(
      //private user:UsuarioService
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
  }

  modificar(){
    //this.user.singup(this.username,this.nombre,this.apellidos,this.correo,this.password,this.genero,this.fechanac)
    //.subscribe((res)=>{
    //  console.log("ya insertó");
    //  console.log(res);      
    //})
  }

  Genero(tipo:string){
    if(tipo=="m"){
      this.genero='M';
    }else if(tipo=="f"){
      this.genero='F';
    }
  }

}
