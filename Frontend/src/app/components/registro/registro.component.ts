import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private user:UsuarioService) { }

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

  registrarse(){
   // console.log(this.fechanac);
    this.user.singup(this.username,this.nombre,this.apellidos,this.correo,this.password,this.genero,this.fechanac)
    .subscribe((res)=>{
      console.log("ya insertó");
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
